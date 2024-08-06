import styles from "./ui/index.module.css";
import closeIcon from "../../assets/icons/close.svg";
import { ChangeEvent, FC, useState } from "react";
import { SecondTitle } from "../secondTitle/SecondTitle";
import { Input } from "../input/Input";
import { Text } from "../Text/Text";
import { Button } from "../button/Button";
import { FormDataTypes, ModalProps } from "./model/types";
import { useLoginMutation } from "../../app/redux/auth/authApi";
import { Linked } from "../Linked/Linked";
import { useNavigate } from "react-router-dom";

const LoginModal: FC<ModalProps> = ({ modal, setModal }) => {
  const [formData, setFormData] = useState<FormDataTypes>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [checked, setChecked] = useState<boolean>(false);

  const [login, { data: tokens, isSuccess }] = useLoginMutation();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : prevErrors[name],
    }));
  };

  const handleLogin = async () => {
    const loginData = new FormData();
    loginData.append("username", formData.email);
    loginData.append("password", formData.password);
    const newErrors: { [key: string]: string } = {};

    try {
      const res = await login({ user: loginData });
      console.log(res);
      if (res.data) {
        localStorage.setItem("token", res.data.access_token);
      }
      if (res.error) {
        newErrors.error = "Invalid email or password.";
        setErrors(newErrors);
      } else {
        newErrors.error = "";
        setErrors(newErrors);
      }
    } catch (error) {
      newErrors.error = "Invalid email or password.";
      setErrors(newErrors);
    }
  };

  return (
    <div
      className={`${styles.modal} ${modal ? styles.active : null}`}
      onClick={() => setModal(false)}
    >
      <div
        className={styles.content_wrapper}
        onClick={(e) => e.stopPropagation()}
      >
        {errors && errors.error && (
          <div className={styles.errors}>
            <div>{errors.error}</div>
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.close_icon} onClick={() => setModal(false)}>
            <img src={closeIcon} alt="close icon" />
          </div>

          {isSuccess ? (
            <>
              <div className={styles.content_block}>
                <SecondTitle fz="40px" mb="40px">
                  Your application to join the community is being processed
                </SecondTitle>
                <Text>
                  You will receive information about joining the community
                  within 20 minutes after filling out the questionnaire.
                </Text>
              </div>
              <br />
            </>
          ) : (
            <>
              <div className={styles.content_block}>
                <SecondTitle fz="50px" mb="40px">
                  Log in
                </SecondTitle>
                <div className={styles.inputs}>
                  <Input
                    $error={errors?.email ? true : false}
                    required
                    placeholder="E-mail"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Input
                    $error={errors?.password ? true : false}
                    required
                    placeholder="Password"
                    type={checked ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className={styles.check_block}>
                    <div className={styles.check}>
                      <input
                        onChange={() => setChecked(!checked)}
                        type="checkbox"
                        name=""
                        id="chekc"
                      />
                      <label htmlFor="chekc">Show password</label>
                    </div>
                    <Text fw="500">Forgot your password?</Text>
                  </div>
                </div>

                <Button onClick={handleLogin} $bg $icon>
                  Enter
                </Button>
              </div>
              <div className={styles.link}>
                <Text fw="500">Don't have an account? </Text>
                <Linked
                  onClick={() => {
                    setModal(false);
                    navigate("/registration");
                  }}
                  $weight="500"
                  $underline
                >
                  Join Now
                </Linked>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

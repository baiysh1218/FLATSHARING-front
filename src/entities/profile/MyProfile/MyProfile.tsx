import React, { useEffect, useState } from "react";
import styles from "../ui/index.module.css";
import { Title } from "../../../shared/title/Title";
import { SecondTitle } from "../../../shared/secondTitle/SecondTitle";
import { Input } from "../../../shared/input/Input";
import photo from "../../../assets/png/photo Vlad Terzi.png";
import replaceIcon from "../../../assets/icons/button replace photo.svg";
import { TextArea } from "../../../shared/textArea/TextArea";
import { Text } from "../../../shared/Text/Text";
import { Button } from "../../../shared/button/Button";
import { useGetUserQuery } from "../../../app/redux/auth/authApi";

interface FormData {
  id: string;
  email: string;
  password: string;
  new_password: string;
  want_to_let: string;
  img: string;
  firstName: string;
  lastName: string;
  address: string;
  profession: string;
}

const MyProfile = () => {
  const { data } = useGetUserQuery({});
  const [formData, setFormData] = useState<FormData>({
    id: "",
    email: "",
    password: "",
    new_password: "",
    want_to_let: "",
    img: "",
    firstName: "",
    lastName: "",
    address: "",
    profession: "",
  });

  useEffect(() => {
    if (data) {
      const [firstName, lastName] = data.full_name.split(" ");
      setFormData({
        id: data.id || "",
        email: data.contact_email || "",
        password: "",
        new_password: "",
        want_to_let: data.where_to_let || "",
        img: "",
        firstName: firstName || "",
        lastName: lastName || "",
        address: data.where_to_rent || "",
        profession: "",
      });
    }
  }, [data]);

  console.log(data);
  return (
    <div className={styles.right_side}>
      <Title $fz="50px" style={{ marginBottom: "50px" }}>
        My Profile
      </Title>
      <div className={styles.info_wrapper}>
        <div className={styles.personal_info}>
          <div className={styles.personal_info_text}>
            <SecondTitle fz="24px">Personal Information</SecondTitle>
            <Input value={formData.firstName} placeholder="First Name" />
            <Input value={formData.lastName} placeholder="Last Name" />
          </div>
          <div className={styles.personal_info_avatar}>
            <img
              className={styles.user_img}
              src={
                formData.img
                  ? formData.img
                  : "https://i.pinimg.com/564x/25/ee/de/25eedef494e9b4ce02b14990c9b5db2d.jpg"
              }
              alt="user avatar"
            />
            <img
              className={styles.user_img_icon}
              src={replaceIcon}
              alt="replase icon"
            />
          </div>
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Work</SecondTitle>
          <Input
            value={formData.profession}
            placeholder="Enter your profession"
          />
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Interests</SecondTitle>
          <TextArea placeholder="Enter your profession" />
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">
            Are you interested in participating in regular community forums
            dedicated to travel, visas, relocation and taxes?
          </SecondTitle>
          <div className={styles.radio}>
            <div>
              <input type="radio" name="want_to_let" value="Yes" checked />
              <p>Yes</p>
            </div>
            <div>
              <input type="radio" name="want_to_let" value="No" />
              <p>No</p>
            </div>
            <div>
              <input
                type="radio"
                name="want_to_let"
                value="I haven't decided yet"
              />
              <p>I haven't decided yet</p>
            </div>
          </div>
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Email</SecondTitle>
          <Input value={formData.email} placeholder="Email" />
          <div className={styles.check}>
            <input type="checkbox" name="" id="chekc" />
            <label htmlFor="chekc">Do not show email in the community</label>
          </div>
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Social network</SecondTitle>
          <Text style={{ marginBottom: "20px" }}>
            Increase the credibility of your profile by adding your social media
            pages.
          </Text>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Instagram
            </SecondTitle>
            <input type="text" placeholder="Not added" />
            <Button
              $bg
              style={{
                padding: "2px 35px",
                fontSize: "16px",
                minHeight: "60px",
              }}
            >
              Connect
            </Button>
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Linkedin
            </SecondTitle>
            <input type="text" placeholder="Not added" />
            <Button
              $bg
              style={{
                padding: "2px 35px",
                fontSize: "16px",
                minHeight: "60px",
              }}
            >
              Connect
            </Button>
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Facebook
            </SecondTitle>
            <input type="text" placeholder="Not added" />
            <Button
              $bg
              style={{
                padding: "2px 35px",
                fontSize: "16px",
                minHeight: "60px",
              }}
            >
              Connect
            </Button>
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Twitter
            </SecondTitle>
            <input type="text" placeholder="Not added" />
            <Button
              $bg
              style={{
                padding: "2px 35px",
                fontSize: "16px",
                minHeight: "60px",
              }}
            >
              Connect
            </Button>
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Telegram
            </SecondTitle>
            <input type="text" placeholder="Not added" />
            <Button
              $bg
              style={{
                padding: "2px 35px",
                fontSize: "16px",
                minHeight: "60px",
              }}
            >
              Connect
            </Button>
          </div>
          <div className={styles.one_input}>
            <SecondTitle fz="16px" style={{ width: "30%" }}>
              Whatsapp
            </SecondTitle>
            <input type="text" placeholder="Not added" />
            <Button
              $bg
              style={{
                padding: "2px 35px",
                fontSize: "16px",
                minHeight: "60px",
              }}
            >
              Connect
            </Button>
          </div>
        </div>
        <div className={styles.personal_info_item}>
          <SecondTitle fz="24px">Replace the password</SecondTitle>
          <Input placeholder="Current password" />
          <Input placeholder="New password" />
          <Input placeholder="Confirm the new password" />
          <div className={styles.check}>
            <input type="checkbox" name="" id="chekc" />
            <label htmlFor="chekc">Show password</label>
          </div>
          <Text fw="500" style={{ marginTop: "20px" }}>
            Forgot your passowrd ?
          </Text>
        </div>
        <Button $bg $icon type="button">
          Save
        </Button>
        <Text fw="500" style={{ marginTop: "20px" }}>
          How my profile{" "}
          <span style={{ textDecoration: "underline", fontWeight: "500" }}>
            {" "}
            is seen by other community members
          </span>
        </Text>
      </div>
    </div>
  );
};

export default MyProfile;

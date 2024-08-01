import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Step1 from "../steps/Step1";
import Main from "../steps/Main";

import clsx from "./ui/index.module.css";

import auth1 from "../../../assets/png/auth1.png";
import auth2 from "../../../assets/png/auth2.png";
import auth3 from "../../../assets/png/auth3.png";

import { Button } from "../../../shared/button/Button";
import Step2 from "../steps/Step2";
import Steap3 from "../steps/Steap3";
import Step4 from "../steps/Step4";
import Step5 from "../steps/Step5";
import ImageUploader from "../steps/ImageUploader";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../../app/redux/auth/authApi";
import InputStep from "../steps/InputStep";
import Complete from "../steps/Complete";
import { Text } from "../../../shared/Text/Text";
import SocialMedia from "../steps/SocialMedia";

interface FormData {
  id: string;
  password: string;
  password_confirm: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  is_accepted: boolean;
  firstName: string;
  lastName: string;
  address: string;
  profession: string;
}

const Auth: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    id: "",
    email: "",
    password: "",
    password_confirm: "",
    is_active: true,
    is_superuser: false,
    is_verified: false,
    is_accepted: false,
    firstName: "",
    lastName: "",
    address: "",
    profession: "",
  });

  const [currentStep, setCurrentStep] = useState<number>(() => {
    const searchParams = new URLSearchParams(location.search);
    const stepId = parseInt(searchParams.get("step") || "1", 10);
    return stepId;
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [register, { isLoading, isError, isSuccess, data, error }] =
    useRegisterMutation();

  const [login, { data: tokens }] = useLoginMutation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const stepId = parseInt(searchParams.get("step") || "1", 10);
    setCurrentStep(stepId);
  }, [location.search]);

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

  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};
    if (currentStep === 1) {
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!formData.email.includes("@")) {
        newErrors.email = "Email must contain '@'";
      } else {
        const emailParts = formData.email.split("@");
        if (emailParts.length < 2 || emailParts[1].trim() === "") {
          newErrors.email = "There must be something after the @-sign";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
      }
    } else if (currentStep === 2) {
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.password_confirm)
        newErrors.password_confirm = "Password confirm is required";
      if (formData.password !== formData.password_confirm)
        newErrors.password_confirm = "Passwords must match";
    } else if (currentStep === 3) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
    } else if (currentStep === 4) {
      if (!formData.address) newErrors.address = "Address is required";
    } else if (currentStep === 7) {
      if (!formData.profession) newErrors.profession = "Profession is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async (handleNext: () => void) => {
    if (!validateStep()) return;
    const registerData = {
      email: formData.email,
      password: formData.password,
      is_active: true,
      is_superuser: false,
      is_verified: false,
      is_accepted: false,
    };
    const loginData = new FormData();
    loginData.append("username", formData.email);
    loginData.append("password", formData.password);
    try {
      const res = await register({ user: registerData });
      const res2 = await login({ user: loginData });
      console.log(res);
      console.log(res2);

      if (res.data) {
        setFormData((prevData) => ({
          ...prevData,
          id: res.data.id,
        }));
        handleNext();
      }
    } catch (err) {
      console.error(err);
    }
  };
  console.log(formData);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep()) return;

    try {
      console.log(formData);
      await register({ user: formData }).unwrap();
    } catch (err) {}
  };

  const goToStep = (step: number) => {
    navigate(`/registration?step=${step}`);
  };

  const handleNext = () => {
    if (!validateStep()) return;
    goToStep(currentStep + 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Main src={auth1}>
            <Step1
              formData={formData}
              handleChange={handleChange}
              titles="What’s your email?"
              placeholder="Email"
              name="email"
              errors={errors}
            />
          </Main>
        );
      case 2:
        return (
          <Main src={auth2}>
            <Step2
              formData={formData}
              handleChange={handleChange}
              name="password"
              name2="password_confirm"
              errors={errors}
            />
          </Main>
        );
      case 3:
        return (
          <Main src={auth2}>
            <Step5
              formData={formData}
              handleChange={handleChange}
              name="firstName"
              name2="lastName"
              errors={errors}
            />
          </Main>
        );
      case 4:
        return (
          <Main src={auth2}>
            <InputStep
              name="address"
              formData={formData}
              value={formData.address}
              handleChange={handleChange}
              titles="What’s your home address? Specify the country and city"
              placeholder="Enter your home address"
              errors={errors}
            />
          </Main>
        );
      case 5:
        return (
          <Main src={auth3}>
            <Steap3
              formData={formData}
              name="_"
              handleChange={handleChange}
              titles="Would you like to rent out your apartment at the time of departure?"
            />
          </Main>
        );
      case 6:
        return (
          <Main src={auth3}>
            <Steap3
              formData={formData}
              name="_"
              handleChange={handleChange}
              titles="Are you interested in participating in regular community forums dedicated to travel, visas, relocation and taxes?"
            />
          </Main>
        );
      case 7:
        return (
          <Main src={auth3}>
            <InputStep
              name="profession"
              formData={formData}
              value={formData.profession}
              handleChange={handleChange}
              placeholder="Enter your profession"
              titles="Tell us about yourself. Where do you work?"
              errors={errors}
            />
          </Main>
        );
      case 8:
        return (
          <Main src={auth3}>
            <Step4
              name="_"
              titles="What are you interested in?"
              placeholder="Enter your interests"
              formData={formData}
              handleChange={handleChange}
              errors={errors}
            />
          </Main>
        );
      case 9:
        return (
          <Main src={auth3}>
            <ImageUploader />
          </Main>
        );
      case 10:
        return (
          <Main src={auth3}>
            <Complete
              formData={formData}
              handleChange={handleChange}
              titles="What’s your email?"
              placeholder="Email"
              name="email"
              errors={errors}
            />
          </Main>
        );
      case 11:
        return (
          <Main src={auth3}>
            <SocialMedia
              formData={formData}
              handleChange={handleChange}
              titles="What’s your email?"
              placeholder="Email"
              name="email"
              errors={errors}
            />
          </Main>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${clsx.registrationForm} container`}>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className={`${clsx.buttons}`}>
          {currentStep !== 1 && currentStep <= 9 && (
            <Button
              $border
              type="button"
              style={{ backgroundColor: "transparent" }}
              onClick={() => goToStep(currentStep - 1)}
            >
              Back
            </Button>
          )}
          {currentStep < 9 ? (
            <Button
              $bg
              $icon
              type="button"
              onClick={() => {
                if (currentStep == 2) {
                  handleRegister(handleNext);
                } else {
                  handleNext();
                }
              }}
            >
              Next
            </Button>
          ) : currentStep == 9 ? (
            <Button $border $icon $iconColor type="submit" onClick={handleNext}>
              Join the community
            </Button>
          ) : currentStep == 10 ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button
                onClick={handleNext}
                style={{ marginBottom: "20px" }}
                $bg
                $icon
                type="submit"
              >
                Try 7 Days for 0$
              </Button>
              <Text
                style={{
                  marginLeft: "8%",
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#7C7C7C",
                }}
              >
                Next —{" "}
                <span style={{ textDecoration: "line-through" }}>75$</span>{" "}
                 28$ per year
              </Text>
            </div>
          ) : (
            <Button $bg $icon type="submit">
              Save information
            </Button>
          )}
        </div>
        {currentStep <= 9 ? (
          <div className={clsx.step_wrapper}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className={`${clsx.step_block} ${
                  currentStep >= item ? clsx.step_active : ""
                }`}
              ></div>
            ))}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Auth;

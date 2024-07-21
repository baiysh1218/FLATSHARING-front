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
import { useRegisterMutation } from "../../../app/redux/auth/authApi";

interface FormData {
  password: string;
  email: string;
  is_active: boolean;
  is_superuser: boolean;
  is_verified: boolean;
  is_accepted: boolean;
}

const Auth: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    is_active: false,
    is_superuser: false,
    is_verified: false,
    is_accepted: false,
  });

  const [currentStep, setCurrentStep] = useState<number>(() => {
    const searchParams = new URLSearchParams(location.search);
    const stepId = parseInt(searchParams.get("step") || "1", 10);
    return stepId;
  });

  const [register, { isLoading, isError, isSuccess, data, error }] =
    useRegisterMutation();

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
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await register({ user: formData }).unwrap();
    } catch (err) {}
  };

  const goToStep = (step: number) => {
    navigate(`/registration?step=${step}`);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Main src={auth1}>
            <Step1
              formData={formData}
              handleChange={handleChange}
              name="firstName"
              name2="lastName"
            />
          </Main>
        );
      case 2:
        return (
          <Main src={auth2}>
            <Step2
              formData={formData}
              handleChange={handleChange}
              titles="What’s your email?"
              placeholder="Email"
              name="email"
            />
          </Main>
        );
      case 3:
        return (
          <Main src={auth2}>
            <Step5
              formData={formData}
              handleChange={handleChange}
              name="password"
            />
          </Main>
        );
      case 4:
        return (
          <Main src={auth2}>
            <Step2
              name="addreess"
              formData={formData}
              handleChange={handleChange}
              titles="What’s your home address? Specify the country and city"
              placeholder="Enter your home address"
            />
          </Main>
        );
      case 5:
        return (
          <Main src={auth3}>
            <Steap3
              formData={formData}
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
              handleChange={handleChange}
              titles="Are you interested in participating in regular community forums dedicated to travel, visas, relocation and taxes?"
            />
          </Main>
        );
      case 7:
        return (
          <Main src={auth3}>
            <Step2
              name="profession"
              formData={formData}
              handleChange={handleChange}
              placeholder="Enter your profession"
              titles="Tell us about yourself. Where do you work?"
            />
          </Main>
        );
      case 8:
        return (
          <Main src={auth3}>
            <Step4
              titles="What are you interested in?"
              placeholder="Enter your interests"
              formData={formData}
              handleChange={handleChange}
            />
          </Main>
        );
      case 9:
        return (
          <Main src={auth3}>
            <ImageUploader />
          </Main>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${clsx.registrationForm}`}>
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className={`${clsx.buttons} container`}>
          {currentStep !== 1 && (
            <Button
              $border
              type="button"
              style={{ backgroundColor: "transparent" }}
              onClick={() => goToStep(currentStep - 1)}
            >
              Back
            </Button>
          )}
          {currentStep !== 9 ? (
            <Button
              $bg
              $icon
              type="button"
              onClick={() => goToStep(currentStep + 1)}
            >
              Next
            </Button>
          ) : (
            <Button $bg $icon type="submit">
              Join the community
            </Button>
          )}
        </div>
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
      </form>
    </div>
  );
};

export default Auth;

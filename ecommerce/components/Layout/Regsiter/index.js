import React, { useState } from "react";
import Model from "../../Model";
import FormRegister from "./components/formRegister";
import FormConfirm from "./components/formConfirm";
import FormVerifyCaptcha from "./components/formVerifyCaptcha";

const Register = ({ onCancle }) => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    DOB: null,
    ProviceID: 0,
    DistrictID: 0,
    WardID: 0,
    Addess: "",
  });
  const handleRegister = () => {
    setStep(step + 1);
  };

  const handleConfirm = () => {};

  const handleVerify = () => {
    setStep(step + 1);
  };

  const handleGoBack = () => {
    setStep(step - 1);
  };

  const StepModels = [
    {
      id: 1,
      step: 1,
      title: "Register",
      form: (
        <FormRegister
          handleRegister={handleRegister}
          data={data}
          setData={setData}
          loading={loading}
        />
      ),
    },
    {
      id: 2,
      step: 2,
      title: "Verify Captcha",
      form: (
        <FormVerifyCaptcha
          handelVerify={handleVerify}
          onBack={handleGoBack}
          loading={loading}
        />
      ),
    },
    {
      id: 3,
      step: 3,
      title: "Confirm Email",
      form: (
        <FormConfirm
          handleConfirm={handleConfirm}
          email={data.Email}
          onBack={handleGoBack}
          loading={loading}
        />
      ),
    },
  ];

  return (
    <>
      {StepModels.map(
        (item) =>
          item.step == step && (
            <Model
              key={item.id}
              steps={item.step / StepModels.length}
              onCancle={onCancle}
              title={item.title}
            >
              {item.form}
            </Model>
          )
      )}
    </>
  );
};

export default Register;

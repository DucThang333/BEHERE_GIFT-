import React from "react";
import Model from "@/components/Model";
import ButtonBasic from "@/components/Button/buttonBasic";

const FormVerifyCaptcha = ({ handelVerify, onBack, loading }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div style={{ width: "500px" }}>
        <div className="w-9/12 mt-5 font-medium text-lg font-Inter">
          <span>
            Before you proceed to the register, please complete the Captcha
            below.
          </span>
        </div>
        <div className="w-full h-28 mt-7"></div>
        <div className="flex justify-end mt-7 mb-10">
          <ButtonBasic title={"Go Back"} onFunc={onBack} />
          <ButtonBasic
            title={"Verify"}
            className={"ml-2"}
            onFunc={handelVerify}
            loading={loading}
          />
        </div>
      </div>
    </form>
  );
};

export default FormVerifyCaptcha;

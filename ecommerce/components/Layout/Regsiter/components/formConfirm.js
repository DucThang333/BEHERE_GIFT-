import ButtonBasic from "@/components/Button/buttonBasic";
import InputBasic from "@/components/Input/inputBasic";
import React, { useEffect, useRef, useState } from "react";
import "./styleConfirm.css";

const FormConfirm = ({ handleConfirm, email, onBack, loading,onSubmit }) => {
  const refFocus = useRef([]);

  const [code, setCode] = useState([]);
  const [emailHiden, setEmailHiden] = useState([]);
  let focus = 0;
  const TotalCode = 6;
  useEffect(() => {
    refFocus.current[focus].focus();
    if (email) {
      const EmailArr = email.split("@");
      if (EmailArr.length == 2) {
        setEmailHiden(
          EmailArr[0].length > 5
            ? EmailArr[0].substring(0, 5) +
                "*".repeat(EmailArr[0].length - 5) +
                "@" +
                EmailArr[1]
            : "*".repeat(EmailArr[0].length) + "@" + EmailArr[1]
        );
      } else {
        setEmailHiden("*".repeat(email.length));
      }
    } else {
      setEmailHiden("*".repeat(email.length));
    }
  }, []);

  const handleOnchange = (e, index) => {
    if (e.nativeEvent.inputType === "insertFromPaste") {
      focus = index;
      e.target.value.split("").forEach((el) => {
        refFocus.current[focus].value = el;
        focus++;
      });
    } else {
      if (refFocus.current[index].value) {
        refFocus.current[index].value = e.target.value.slice(-1);
        focus = index + 1 < TotalCode ? index + 1 : 0;
      } else {
        focus = index - 1 >= 0 ? index - 1 : TotalCode - 1;
      }
    }
    refFocus.current[focus].focus();
  };

  

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-confirm">
        <div className="flex flex-col items-center mt-3 m-auto w-8/12">
          <span className="font-semibold text-xl">E-mail Authentication</span>
          <span className="text-center mt-3  text-base">
            We've sent an authentication code to {emailHiden} .Please check your
            index and enter the six-digit code.This code was available in 1
            minus!
          </span>
        </div>
        <div className="flex w-full justify-between mt-7">
          {[...Array(TotalCode)].map((_, index) => (
            <input
              key={index}
              type="number"
              className="confirm-input"
              ref={(e) => (refFocus.current[index] = e)}
              onChange={(e) => handleOnchange(e, index)}
            />
          ))}
        </div>
        <div className="mt-4">
          <span>
            Didn't receive code? <span className="link">Send it again</span>
          </span>
        </div>
        <div className="w-full mt-9 mb-7 flex justify-end">
          <ButtonBasic onFunc={onBack} title={"Back"} className={"mr-2"} />
          <ButtonBasic
            onFunc={handleConfirm}
            type={"Submit"}
            title={"Submit"}
            loading={loading}
          />
        </div>
      </div>
    </form>
  );
};

export default FormConfirm;

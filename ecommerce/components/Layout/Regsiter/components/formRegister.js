import ButtonBasic from "@/components/Button/buttonBasic";
import InputBasic from "@/components/Input/inputBasic";
import "./styleRegister.css";
import React, { useState } from "react";

const FormRegister = ({ handleRegister, data, setData, loading,onSubmit }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      onSubmit()
      }}>
      <div className="register-model">
        <div className="flex w-full justify-between mt-5">
          <div style={{ width: "48%" }}>
            <InputBasic
              className={"h-11"}
              type={"text"}
              data={data.FirstName}
              setData={(value) => setData({ ...data, FirstName: value })}
              autoFocus={true}
              placeholder={"Enter your first name."}
              label={"First Name"}
              required={true}
            />
          </div>
          <div style={{ width: "48%" }}>
            <InputBasic
              className={"h-11"}
              type={"text"}
              data={data.LastName}
              setData={(value) => setData({ ...data, LastName: value })}
              placeholder={"Enter your last name."}
              label={"Last Name"}
              required={true}
            />
          </div>
        </div>
        <div className="mt-3">
          <InputBasic
            className={"h-11"}
            type={"text"}
            data={data.Email}
            setData={(value) => setData({ ...data, Email: value })}
            placeholder={"Enter your email address"}
            label={"Email Address"}
            required={true}
          />
        </div>
        <div className="mt-3 flex justify-between">
          <div style={{ width: "48%" }}>
            <InputBasic
              className={"h-11"}
              type={"password"}
              data={data.Password}
              setData={(value) => setData({ ...data, Password: value })}
              placeholder={"Enter your password"}
              label={"Password"}
              required={true}
            />
          </div>
          <div style={{ width: "48%" }}>
            <InputBasic
              className={"h-11"}
              type={"password"}
              data={data.ConfirmPassword}
              setData={(value) => setData({ ...data, ConfirmPassword: value })}
              placeholder={"Enter your confirm password"}
              label={"Confirm Password"}
              required={true}
            />
          </div>
        </div>
        <div className="flex w-full justify-between mt-3">
          <div style={{ width: "48%" }}>
            <InputBasic
              className={"h-11"}
              type={"date"}
              data={data.DOB}
              setData={(value) => setData({ ...data, DOB: value })}
              autoFocus={true}
              label={"Date Of Birth"}
            />
          </div>
          {/* <div style={{ width: "48%" }}>
            <InputBasic
              className={"h-11"}
              type={"text"}
              data={data.LastName}
              setData={(value) => setData({ ...data, FirstName: value })}
              placeholder={"Enter your last name."}
              label={"Gender"}
            />
          </div> */}
        </div>
        <div className="mt-3 flex justify-between">
          <div style={{ width: "32%" }}>
            <InputBasic
              className={"h-11"}
              type={"text"}
              data={data.ProviceID}
              setData={(value) => setData({ ...data, ProviceID: value })}
              label={"City"}
            />
          </div>
          <div style={{ width: "32%" }}>
            <InputBasic
              className={"h-11"}
              type={"text"}
              data={data.DistrictID}
              setData={(value) => setData({ ...data, DistrictID: value })}
              label={"District"}
            />
          </div>
          <div style={{ width: "32%" }}>
            <InputBasic
              className={"h-11"}
              type={"text"}
              data={data.WardID}
              setData={(value) => setData({ ...data, WardID: value })}
              label={"Ward"}
            />
          </div>
        </div>
        <div className="mt-3">
          <InputBasic
            className={"h-11"}
            type={"text"}
            data={""}
            setData={(value) => setData({ ...data, FirstName: value })}
            placeholder={"Enter your address"}
            label={"Address"}
          />
        </div>
        <div className="w-full mt-3 mb-7">
          <ButtonBasic
            onFunc={handleRegister}
            type={"Submit"}
            title={"Register"}
            className={"w-full h-11"}
            loading={loading}
          />
        </div>
      </div>
    </form>
  );
};

export default FormRegister;

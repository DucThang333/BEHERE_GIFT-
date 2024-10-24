import React, { useState } from "react";
import Image from "next/image";
import "./style.css";
import Model from "../../Model";
import ButtonBasic from "@/components/Button/buttonBasic";
import InputBasic from "@/components/Input/inputBasic";
import LoginAdvance from "./components/LoginAdvance";
import Notify from "@/components/Notify/notifys";
import { validateRegex } from "@/libs/utils";
import AuthenServices from "@/services/AuthenServices";
import Register from "@/components/Layout/Regsiter";
import { useDispatch } from "react-redux";
import { Authen } from "@/reducers/actions/authentication";
const loginAdvance = [
  {
    id: 1,
    icon: {
      src: "/icons8-google.svg",
      alt: "icon google",
      width: 30,
      height: 30,
    },
    text: "Login With Google",
    className: "",
    handleFunc: () => {
      console.log("login with google");
    },
  },
  {
    id: 2,
    icon: {
      src: "/icons8-facebook.svg",
      alt: "icon facebook",
      width: 30,
      height: 30,
    },
    text: "Login With Facebook",
    className: "",
    handleFunc: () => {
      console.log("login with facebook");
    },
  },
];

const regexEmail = "([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9.-]+)([.])+([a-zA-Z]{2,})";
const regexPassword = "[a-zA-Z0-9_.+-@]{8,32}";

const ModelLogin = ({ onCancle, openModelRegister, onOk }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    Email: "",
    Password: "",
    Remember: false,
  });
  const [msg, setMsg] = useState({});
  const [viewPassword, setViewPassword] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = () => {
    //validate attribute login
    if (!validateLogin()) return;
    setLoading(true);

    // send request login
    const body = {
      Email: data.Email,
      Password: data.Password,
    };
    onOk(body);
    setLoading(false)
  };

  const handleOpenModelRegister = () => {
    onCancle();
    openModelRegister();
  };

  const validateLogin = () => {
    if (!validateRegex(data.Email, regexEmail)) {
      setMsg({
        Email: "can't recognise this email address. please check format again!",
      });
      return false;
    } else if (!validateRegex(data.Password, regexPassword)) {
      setMsg({
        Password:
          "password must contain from 8 to 32 characters. please enter again!",
      });
      return false;
    }

    setMsg({});
    return true;
  };

  return (
    <>
      <Model title="Sign In" onCancle={onCancle}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="">
            <div className="mt-3 login-model">
              <InputBasic
                type={"text"}
                data={data?.Email}
                setData={(value) => setData({ ...data, Email: value })}
                placeholder={"Please input Email to login."}
                className={"text-sm h-11"}
                autoFocus={true}
                msgErr={msg?.Email}
                label={"Email"}
              />
            </div>
            <div className="mt-3 flex">
              <InputBasic
                data={data?.Password}
                setData={(value) => setData({ ...data, Password: value })}
                type={viewPassword ? "text" : "password"}
                placeholder={"Please input password to login."}
                className={"text-sm h-11 relative"}
                msgErr={msg?.Password}
                label={"Password"}
              >
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer p-3"
                  onClick={() => setViewPassword(!viewPassword)}
                >
                  <Image
                    src={viewPassword ? "/eye_close_icon.svg" : "/eye_icon.svg"}
                    width={16}
                    height={16}
                    alt="icon eyes"
                    className="textHover"
                  />
                </div>
              </InputBasic>
            </div>
            <div className="flex justify-end fon">
              <a
                href="#"
                className="italic font-semibold text-sm mt-3 textHover"
              >
                Forget Password
              </a>
            </div>
            <div className="w-full m-auto mt-4">
              <ButtonBasic
                onFunc={handleLogin}
                title={"Login"}
                loading={loading}
                className={"w-full text-2xl font-bold"}
                type={"submit"}
              />
            </div>
            <div className="w-full flex flex-col items-center mt-3">
              <div
                className="text-sm font-semibold italic cursor-pointer textHover"
                onClick={handleOpenModelRegister}
              >
                create new account
              </div>
              <h3 className="font-medium text-sm">Or</h3>
            </div>
            <div className="mb-7 mt-3">
              <LoginAdvance item={loginAdvance} />
            </div>
          </div>
        </form>
      </Model>
    </>
  );
};

export default ModelLogin;

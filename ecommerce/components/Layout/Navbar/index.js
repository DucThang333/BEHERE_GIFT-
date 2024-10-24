import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";
import ButtonBasic from "../../Button/buttonBasic";
import Login from "../Login";
import Register from "../Regsiter";
import { useDispatch, useSelector } from "react-redux";
import { Authen, UnAuthen } from "@/reducers/actions/authentication";
import AuthenServices from "@/services/AuthenServices";
import { saveRefreshToken, saveToken } from "@/libs/utils";
import Notify from "@/components/Notify/notifys";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenuSetting } from "../../Menu/dropdown-menu";

export const Navbar = () => {
  // const [loadingLogin, setLoadingLogin] = useState(false);
  const [openModelLogin, setOpenModelLogin] = useState(false);
  const [openModelRegister, setOpenModelRegister] = useState(false);
  const authen = useSelector((state) => state.Authen);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("Token");
    dispatch(UnAuthen());
  };

  const handleLogin = (body) => {
    setOpenModelLogin(false);
    dispatch(
      Authen({
        email: "NguyenHuyTung@gmail.com",
        firstName: "Tung",
        lastName: "Nguy Huy",
        provinceID: 0,
        districtID: 0,
        wardID: 0,
        avatar:
          "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/455691361_2824001701090292_1114120269685380174_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH8uQ2I45_4cKrRgbB9P52_Abd_OLDwjK0Bt384sPCMra7puNeeLjBdY0HWgF82aVXo3bhSz_pHke-u6l3B3X-7&_nc_ohc=2NQyz-OqItAQ7kNvgGz3ruQ&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AaPgubK-SGQHBwX1OWIPOx4&oh=00_AYBzIsXO46Szmw7hH9ToU5c1wG8lVIoNIREX9v5-42TRdg&oe=671DACE3",
      })
    );
    Notify.Success("Đăng nhập thành công.");
    setOpenModelLogin(false);
  };

  console.log({ User: authen });

  return (
    <>
      <header className="navbar w-full flex justify-center items-center">
        <div className="w-11/12 flex items-center">
          <div className="navbar-logo">
            <Image
              src="/logo.png"
              alt="Vercel Logo"
              className="dark:invert rounded-lg"
              width={100}
              height={24}
              priority
            />
          </div>
          <div className="navbar-link m-auto">
            <a href="" className="font-medium text-lg">
              Trang chủ
            </a>
            <a href="" className="ml-20 font-medium text-lg">
              Bộ sưu tập
            </a>
            <a href="" className="ml-20 font-medium text-lg">
              Hộp quà có sẵn
            </a>
            <a href="" className="ml-20 font-medium text-lg">
              Giới thiệu
            </a>
          </div>
          <div className="navbar-feature ml-auto flex items-center">
            <div className="mr-3">
              <ButtonBasic
                onFunc={() => setOpenModelRegister(true)}
                title={"Register"}
              />
            </div>
            <div className="mr-3">
              {authen.Login ? (
                <ButtonBasic onFunc={handleLogout} title={"Logout"} />
              ) : (
                <ButtonBasic
                  onFunc={() => setOpenModelLogin(true)}
                  title={"Login"}
                />
              )}
            </div>
            <DropdownMenuSetting
              trigger={
                <Avatar className="w-10 rounded-full">
                  <AvatarImage
                    className="rounded-full h-full"
                    src={authen.User.avatar}
                    alt="@shadcn"
                  />
                  <AvatarFallback className="rounded-full h-full">
                    <img
                      className="rounded-full h-full"
                      src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                    />
                  </AvatarFallback>
                </Avatar>
              }
              disabled={!authen.Login}
              name={authen.User.name}
            />

            <div className="ml-3 cursor-pointer relative">
              <div className="absolute top-[-5px] right-[-5px] bg-red-400 w-4 h-4 text-xs flex items-center justify-center rounded-full text-white">1</div>
              <svg
                width={28}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                id="cart"
              >
                <path d="M30,6.943H6.928V4.292a1,1,0,0,0-1-1H2a1,1,0,0,0,0,2H4.928V7.943a.931.931,0,0,0,.023.116c0,.031-.008.062,0,.093L7.31,19.2a2.673,2.673,0,0,0,.3,5.329h.45A3.587,3.587,0,0,0,8,25.083a3.625,3.625,0,0,0,7.25,0,3.587,3.587,0,0,0-.057-.559h3.872a3.587,3.587,0,0,0-.057.559,3.625,3.625,0,1,0,7.249,0,3.587,3.587,0,0,0-.057-.559h1.075a1,1,0,0,0,0-2H25.2a3.617,3.617,0,0,0-5.129,0H14.19a3.618,3.618,0,0,0-5.13,0H7.606a.68.68,0,1,1,0-1.359h.906c.01,0,.018,0,.028,0H30a1,1,0,0,0,1-1V7.943A1,1,0,0,0,30,6.943Zm-5.742,18.14a1.625,1.625,0,1,1-1.624-1.625A1.626,1.626,0,0,1,24.258,25.083Zm-11.008,0a1.625,1.625,0,1,1-1.625-1.625A1.626,1.626,0,0,1,13.25,25.083Zm-4.325-7.9h2.02V19.17H9.35Zm-.427-2-.483-2.26h2.93v2.26Zm4.447-2.26h4.019v2.26H12.945Zm6.019,0h4.018v2.26H18.964Zm6.018,0H29v2.26H24.981Zm4.019-2H24.981V8.943H29Zm-6.019,0H18.964V8.943h4.018Zm-6.018,0H12.945V8.943h4.019ZM10.945,8.943v1.981H7.588L7.164,8.943Zm2,8.241h4.019V19.17H12.945Zm6.019,0h4.018V19.17H18.964Zm6.018,1.985V17.185H29V19.17Z"></path>
              </svg>
            </div>
          </div>
        </div>
      </header>
      {openModelLogin && (
        <Login
          onCancle={() => setOpenModelLogin(false)}
          openModelRegister={() => setOpenModelRegister(true)}
          onOk={handleLogin}
        />
      )}
      {openModelRegister && (
        <Register onCancle={() => setOpenModelRegister(false)} />
      )}
    </>
  );
};


"use client";
import "./globals.css";
import { Provider } from "react-redux";
import Navbar from "../components/Layout/navbar";
import Notification from "@/components/Notify";
import { createStore } from "../reducers/store";
import SystemKeyService from "@/services/SystemkeyServices";
import { useEffect, useState } from "react";
import { Add } from "@/reducers/actions/systemkey";
import Notify from "@/components/Notify/notifys";
import { Authen } from "@/reducers/actions/authentication";
import UserService from "@/services/UserServices";
import { usePathname, useRouter } from "next/navigation";
import Routes from "@/routers";
import { getToken } from "@/libs/utils";

export default function Layout({ children }) {
  const [isManage, setIsManage] = useState(false);
  
  const store = createStore();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // GetSystemKey();
    CheckAuthen();
    //CheckPermission();
  }, []);

  // const CheckPermission = () => {
  //   const Route = Routes.find((r) => r.Route === pathname);
  //   if (!Route?.IsVisit?.includes(0)) return;
  //   router.push("/404");
  // };
  const CheckAuthen = () => {
    const token = getToken() || null;
    if (token) {
      UserService.GetIdentifier().then((res) => {
        if (!res.isOk) return;
        store.dispatch(Authen(res?.object?.Data));
        setIsManage(true);
      });
    }
  };

  // const GetSystemKey = () => {
  //   SystemKeyService.GetAll().then((res) => {
  //     if (!res?.isOk) return;
  //     store.dispatch(Add(res?.object?.Data));
  //   });
  // };

  return (
    <html lang="en" data-lt-installed="true">
      <body className="min-h-screen">
        <Provider store={store}>
          {!isManage && <Navbar />}
          <Notification />
          <div className="max-w-[1200px] m-auto z-0">{children}</div>
        </Provider>
      </body>
    <Footer/>

    </html>
  );
}


const Footer = () => {
  return (
    <div className="mt-8 bg-orange-100 pt-9 text-black py-10">
      <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
        <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
          <div className="md:w-[316px]">
            <h1 className=" font-extrabold">
              <span className="text-rose-600">YOUR</span>LOGO
            </h1>
          </div>
          <div className="md:w-[316px]">
            <ContactItem
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                    fill="black"
                  ></path>
                </svg>
              }
              text="+91 1800123444"
              label="Support Number"
              href="tel:+911800123444"
            />
            <ContactItem
              icon={
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L0.75 2.67969V1.5L10 6.82281L19.25 1.5V2.67969L10 7.98281ZM18.25 14.25H1.75C1.451 14.25 1.25 14.049 1.25 13.75V3.89844L10 8.92969L18.75 3.89844V13.75C18.75 14.049 18.549 14.25 18.25 14.25Z"
                    fill="black"
                  ></path>
                </svg>
              }
              text="info@yourwebsite.com"
              label="Email Address"
              href="mailto:info@yourwebsite.com"
            />
            <ContactItem
              icon={
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.9882 0H1.0126C0.4682 0 0 0.4682 0 1.0126V18.9882C0 19.5326 0.4682 20 1.0126 20H18.9882C19.5326 20 20 19.5326 20 18.9882V1.0126C20 0.4682 19.5326 0 18.9882 0ZM2.54674 16.5637C2.24131 16.5637 1.99052 16.313 1.99052 16.0076C1.99052 15.7021 2.24131 15.4523 2.54674 15.4523C2.85217 15.4523 3.10296 15.7021 3.10296 16.0076C3.10296 16.313 2.85217 16.5637 2.54674 16.5637ZM5.79014 14.5719C4.43898 14.5719 3.30789 13.4408 3.30789 12.0897V6.8956C3.30789 5.54543 4.43898 4.41435 5.79014 4.41435H14.2099C15.5611 4.41435 16.6922 5.54543 16.6922 6.8956V12.0897C16.6922 13.4408 15.5611 14.5719 14.2099 14.5719H5.79014ZM14.236 12.0308H14.2099C14.0718 12.0308 13.9594 12.1432 13.9594 12.2813C13.9594 12.4194 14.0718 12.5317 14.2099 12.5317H14.236C14.3741 12.5317 14.4864 12.4194 14.4864 12.2813C14.4864 12.1432 14.3741 12.0308 14.236 12.0308ZM18.9882 18.5637H1.0126V1.0126H18.9882V18.5637Z"
                    fill="black"
                  ></path>
                </svg>
              }
              text="Some City, Some State 123456"
              label="Address"
              href="#"
            />
          </div>
          <div className="md:w-[316px]">
            <h2 className="text-lg font-semibold ">Explore</h2>
            <ul className="mt-[18px] flex flex-col gap-2">
              <li>
                <a className="/[80%] hover:" href="#">Home</a>
              </li>
              <li>
                <a className="/[80%] hover:" href="#">About Us</a>
              </li>
              <li>
                <a className="/[80%] hover:" href="#">Courses</a>
              </li>
              <li>
                <a className="/[80%] hover:" href="#">Contact</a>
              </li>
              <li>
                <a className="/[80%] hover:" href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="md:w-[316px]">
            <h2 className="text-lg font-semibold ">Legal</h2>
            <ul className="mt-[18px] flex flex-col gap-2">
              <li>
                <a className="/[80%] hover:" href="#">Privacy Policy</a>
              </li>
              <li>
                <a className="/[80%] hover:" href="#">Terms of Service</a>
              </li>
              <li>
                <a className="/[80%] hover:" href="#">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



const ContactItem = ({ icon, text, label, href }) => {
  return (
    <div className="flex items-center mt-4">
      <span className="mr-3">{icon}</span>
      <div>
        <span className="">{label}:</span>
        <a className="ml-1  hover:text-white" href={href}>
          {text}
        </a>
      </div>
    </div>
  );
};

"use client";
import ButtonBasic from "@/components/Button/buttonBasic";
import { useRouter } from "next/navigation";
import React from "react";

const Error404 = () => {
  const router = useRouter();
  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="w-full flex items-center justify-center mt-80">
      <div className="flex flex-col justify-center">
        <div className="font-black text-9xl cursor-context-menu text-center">
          404
        </div>
        <div className="text-center cursor-context-menu font-bold text-4xl">
          Oops, This Page Not Found!
        </div>
        <div
          className="text-center cursor-context-menu text-lg mt-1"
          style={{ color: "gray" }}
        >
          The link might be corrupted
        </div>
        <div className="text-center cursor-context-menu text-xl mt-1">
          or the page have been removed
        </div>
        <div className="flex justify-center mt-2">
          <ButtonBasic onFunc={handleGoBack} title={"Go Back To Home"} />
        </div>
      </div>
    </div>
  );
};

export default Error404;

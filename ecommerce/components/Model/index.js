import React from "react";
import Image from "next/image";
import "./style.css";

const Model = ({ onCancle, title, steps = 0, children }) => {
  return (
    <div className="model z-10 select-none" onClick={onCancle}>
      <div
        className="bg-white box-border mt-10 model-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pl-8 pr-8 pt-3 m-auto">
          <div className="model-header h-full flex justify-between">
            <h1 className="model-title font-semibold text-2xl pb-3 pt-3 font-inter">
              {title}
            </h1>
            <div className="flex items-center">
              <Image
                src="/close_icon.svg"
                alt="icon close"
                width={14}
                height={14}
                className="clickHover rounded-sm cursor-pointer h-fit"
                onClick={onCancle}
              />
            </div>
          </div>
          <div
            className="model-step"
            style={{ width: `${steps * 100}%` }}
          ></div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Model;

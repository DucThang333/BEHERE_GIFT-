import React, { useState } from "react";
import "./style.css";
import Image from "next/image";

const Notify = (props) => {
  return (
    <>
      {props?.open && (
        <div className="notify">
          <div
            className="notify-content flex justify-center"
            style={props?.NotifyFormat?.style?.NotifyBox}
          >
            <div className="w-11/12 flex items-center">
              <div className="">
                <Image
                  src={props?.NotifyFormat?.icon?.src}
                  alt={props?.NotifyFormat?.icon?.alt}
                  width={props?.NotifyFormat?.icon?.width}
                  height={props?.NotifyFormat?.icon?.height}
                />
              </div>
              <div
                className="flex ml-2 font-inter"
                style={props?.NotifyFormat?.style?.NotifyText}
              >
                <div className="font-semibold text-sm">{`${props?.title}:`}</div>
                <div className="ml-1 text-ellipsis overflow-hidden whitespace-pre-line max-w-64 max-h-11 h text-sm">
                  {props?.message}
                </div>
              </div>
              <div className="ml-auto cursor-pointer" onClick={props?.onCancle}>
                <Image
                  src={"/close_icon.svg"}
                  alt="icon close"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notify;

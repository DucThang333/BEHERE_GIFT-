import React, { useState } from "react";
import "./style.css";

const InputBasic = ({
  className,
  data,
  setData,
  type,
  placeholder,
  autoFocus,
  msgErr,
  label,
  children,
  required,
}) => {
  return (
    <div className="w-full block">
      <label className="font-semibold text-sm font-inter">
        {required ? <span style={{ color: "red" }}>* </span> : ""}
        {label}
      </label>
      <div className={`${className} w-full mt-2`}>
        <input
          value={data || ""}
          onChange={(e) => setData(e?.target?.value)}
          type={type}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`w-full h-full input-basic`}
        />
        {children}
      </div>
      <span className="ml-2 flex text-xs" style={{ color: "#c52121" }}>
        {msgErr}
      </span>
    </div>
  );
};

export default InputBasic;

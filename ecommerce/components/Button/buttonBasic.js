import React, { useState } from "react";
import Loading from "../Loading";
import "./style.css";

const ButtonBasic = ({
  onFunc,
  title,
  loading = false,
  type = "button",
  className,
}) => {
  return (
    <>
      <Loading size={20} className={"mr-2"} loading={loading}>
        <button
          type={type}
          className={`button ${className} ${
            loading ? "cursor-not-allowed" : ""
          }`}
          disabled={loading}
          onClick={onFunc}
        >
          {title}
        </button>
      </Loading>
    </>
  );
};

export default ButtonBasic;

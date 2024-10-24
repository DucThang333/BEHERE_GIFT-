import { title } from "process";
import React from "react";

const ButtonAction = ({
  onFunc = () => {},
  className,
  bgColor,
  width,
  height,
  title,
}) => {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={className}
      onClick={onFunc}
    >
      {title}
    </button>
  );
};

export default ButtonAction;

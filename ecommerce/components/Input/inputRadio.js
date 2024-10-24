import React from "react";

const InputRadio = ({
  name,
  width,
  height,
  label,
  checked,
  onChange = () => {},
}) => {
  return (
    <div className="flex">
      <div>
        <input
          type="radio"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            cursor: "pointer",
          }}
          checked={checked}
          onChange={(e) => onChange(e)}
          name={name}
        />
      </div>
      {label}
    </div>
  );
};

export default InputRadio;

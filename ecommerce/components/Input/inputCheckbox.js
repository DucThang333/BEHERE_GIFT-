import React from "react";

const InputCheckbox = ({
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
          type="checkbox"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            cursor: "pointer",
          }}
          name={name}
          checked={checked}
          onChange={(e) => onChange(e)}
        />
      </div>
      {label}
    </div>
  );
};

export default InputCheckbox;

import Image from "next/image";
import React from "react";

const SubFeature = ({ data, onFunc, selected }) => {
  return (
    <div className="feature" onClick={() => onFunc(data)}>
      <div className="flex justify-between w-full h-full">
        <div className="feature-content">
          <div className="w-2/12 h-full flex items-center justify-center">
            <div
              className="feature-dot"
              style={
                selected?.id == data?.id
                  ? {
                      backgroundColor: "rgb(120 120 251)",
                      boxShadow: "rgb(0 17 172) 0px 0px 6px 3px",
                    }
                  : {}
              }
            ></div>
          </div>
          <div
            className="h-full flex items-center font-semibold text-xs"
            style={
              selected?.id == data?.id ? { color: "rgb(74 74 252 / 69%)" } : {}
            }
          >
            {data?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFeature;

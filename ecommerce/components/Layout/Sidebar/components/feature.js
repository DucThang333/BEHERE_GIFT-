import React, { useEffect, useState } from "react";
import "./styleFeature.css";
import Image from "next/image";
import SubFeature from "./subFeature";

const Feature = ({ data, onFunc, selected }) => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <>
      <div className="feature" onClick={() => setViewMore(!viewMore)}>
        <div className="flex justify-between w-full h-full">
          <div
            className="feature-content"
            style={
              selected?.parentId == data.id
                ? { backgroundColor: "rgb(1 1 204 / 13%)" }
                : {}
            }
          >
            <div className="w-2/12 h-full flex items-center justify-center">
              {data?.icon}
            </div>
            <div
              className="h-full flex items-center font-semibold text-sm"
              style={
                selected?.parentId == data.id
                  ? { color: "rgb(74 74 252 / 69%)" }
                  : {}
              }
            >
              {data?.description}
            </div>
            <div className="feature-view ml-auto flex items-center justify-center">
              <div className="feature-view-click">
                <Image
                  src={viewMore ? "/arrow-down.svg" : "/arrow-right.svg"}
                  alt="icon arrow"
                  width={22}
                  height={22}
                />
              </div>
            </div>
          </div>
          <div
            className="feature-active"
            style={
              selected?.parentId == data.id
                ? { backgroundColor: "rgb(100 100 255 / 61%)" }
                : {}
            }
          ></div>
        </div>
      </div>
      {viewMore &&
        data?.subMenu.map((d) => (
          <SubFeature key={d.id} data={d} onFunc={onFunc} selected={selected} />
        ))}
    </>
  );
};

export default Feature;

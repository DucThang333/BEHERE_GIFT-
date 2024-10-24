import React from "react";
import Image from "next/image";

const LoginAdvance = (props) => {
  return (
    <div className="w-auto flex justify-around">
      {props.item.map((e) => (
        <div onClick={e?.handleFunc} key={e?.id}>
          <div className={`flex items-center textHover cursor-pointer`}>
            <Image
              src={e?.icon?.src}
              alt={e?.icon?.alt}
              className={e?.icon?.className}
              width={e?.icon?.width}
              height={e?.icon?.height}
            />
            <h2 className="font-medium text-xs ml-3">{e.text}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoginAdvance;

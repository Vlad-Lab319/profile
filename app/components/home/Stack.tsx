"use client";

import { useEffect, useState } from "react";
// @ts-ignore
import { HuePicker } from "react-color";

import { svgIcons } from "../../../lib/svg/svgIcons";

const Stack = () => {
  const [iconColor, setIconColor] = useState({
    background: "orange",
  });

  const handleChangeComplete = (color: any) => {
    const newColor = { background: "orange" };
    newColor["background"] = color.hex;
    setIconColor(newColor);
  };

  const handleChange = (color: any) => {
    const newColor = { background: "orange" };
    newColor["background"] = color.hex;
    setIconColor(newColor);
  };

  return (
    <div className="h-full w-full flex flex-col group relative place-items-center place-content-center">
      <div className="w-full h-full flex flex-wrap gap-2 items-center justify-center text-center max-h-min">
        {svgIcons.map((svg) => (
          <div
            className={`m-1 w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24`}
            style={{ color: iconColor.background }}
            key={svg.key}
          >
            {svg}
          </div>
        ))}
      </div>
      <div className="w-full h-full max-h-min pt-4 opacity-0 group-hover:opacity-100 flex items-center justify-center">
        <HuePicker
          width="280px"
          height="16px"
          direction="horizontal"
          color={iconColor.background}
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    </div>
  );
};

export default Stack;

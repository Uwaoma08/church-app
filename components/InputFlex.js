import React, { useState } from "react";
import CloseIcon from "./Icons/CloseIcon";
import EyeIcon from "./Icons/EyeIcon";

const InputFlex = ({ placeholder, type, icon, icon2 }) => {
  const [isVisible, setIsVisible] = useState(false);


  return (
    <div className="border mt-4 mb-10 flex justify-center items-center h-[62px] rounded-md border-greyBorder focus-within:border-blueColor focus-within:border-2">
      {icon}

      <input
        placeholder={placeholder}
        type={isVisible ? 'text' : type}
        className="w-full h-[30px] text-blueColor text-[20px] outline-none "
      />

      {type == "password" ? (
        <button onClick={() => setIsVisible(val => !val)}>
          <EyeIcon className="stroke-current" />
        </button>
      ) : (
        <CloseIcon className="stroke-current " />
      )}
    </div>
  );
};

export default InputFlex;

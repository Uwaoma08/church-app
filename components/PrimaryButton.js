import React from "react";

const PrimaryButton = ({btnText, onClick}) => {
  return (
    <button onClick={onClick} className="bg-blueColor hover:bg-blue-700 h-[62px] rounded-md text-xl text-white max-w-[100%] w-full drop-shadow-2xl  mb-5">
      {" "}
     {btnText}
    </button>
  );
};

export default PrimaryButton;

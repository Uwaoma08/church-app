import React from "react";

const BackIcon = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current h-6 mx-5 text-gray-400 hover:text-blueColor cursor-pointer w-full`}
  
    >
      <path
        d="M6.68188 12.3638L1 6.68188L6.68188 1"
        // stroke="#C0CDE0"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.37012 6.68188C14.1617 6.68188 19.6882 12.1862 19.6882 19"
        // stroke="#C0CDE0"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackIcon;

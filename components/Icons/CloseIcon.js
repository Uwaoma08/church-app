import React from "react";

const CloseIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-current h-6 mx-5 text-gray-400 hover:text-blueColor cursor-pointer`}
    >
      <path
        d="M1 1.00037L13 13.0004"
        // stroke="#162338"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 13.0004L13 1.00037"
        // stroke="#162338"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;

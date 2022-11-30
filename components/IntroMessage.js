import React from "react";

const IntroMessage = ({welcome, provideInfo}) => {
  return (
    <div className=" mt-10">
      <h1 className="font-bold text-blueColor text-3xl ">{welcome}</h1>
      <p className=" text-greyColor text-xl mt-5">
       {provideInfo}
      </p>
    </div>
  );
};

export default IntroMessage;

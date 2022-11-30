import React from "react";

const SignIn = ({signInText}) => {
  return (
    <h1 className="text-navColor font-bold text-xl py-4 text-center border-b border-offWhite leading-[30px]">
      {signInText}
    </h1>
  );
};

export default SignIn;

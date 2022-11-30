import React from "react";


const SignUpCongrats = () => {
  return (
    <div>
      <div className="max-w-[826px] mx-auto">
        <div className="max-w-[826px] mx-auto bg-white rounded-md border border-offWhite">
          <div className="lg:ml-20 ml-10 lg:mr-20 mr-10 flex flex-col items-center my-40">
            <img src="/circleIcon.svg" />
            <h1 className="text-5xl text-[#24457A] max-w-[345px] font-bold mb-10 mt-20">Congratulations!</h1>
            <p className="text-2xl text-greyColor text-center max-w-[593px]">
              Your acount has been created successfully. We have sent an email
              to emmabidem@gmail.com, please check and activate your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpCongrats;

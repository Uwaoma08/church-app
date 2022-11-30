import React from "react";
import Link from "next/link";
import SignIn from "../components/SignIn";
import IntroMessage from "../components/IntroMessage";
import InputFlex from "../components/InputFlex";
import PrimaryButton from "../components/PrimaryButton";

const SignUpFive = () => {
  return (
    <div>
      <div className="max-w-[826px] mx-auto">
        <div className="max-w-[826px] mx-auto bg-white rounded-md border border-offWhite">
          <SignIn signInText="FORGOT PASSWORD" />
          <div className="lg:ml-20 ml-4 lg:mr-20 mr-4">
            <IntroMessage
              welcome="It seems you forgot your password"
              provideInfo="Please supply your email used during registration, to help us send you a 
              reset link"
            />
           <div className="mt-20 mb-20">
           <InputFlex
              leftIcon="/message.svg"
              placeholder="Email address"
            />
           </div>

            <PrimaryButton btnText="SEND RESET LINK" />
            <div className="my-10 mb-10 mt-10  lg:flex-row flex flex-col justify-between items-center ">
              <p className="text-xl text-blueText mb-10">
                <Link href="/">I remember my password</Link>
              </p>
              <p className="text-xl text-lightBlue mb-10">
                <Link href="/sign-up"> Don’t have an account?</Link>    <br className="lg:hidden" /> <Link href="/sign-up">Sign up
                  here</Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpFive;

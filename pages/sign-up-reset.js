import React from "react";
import Link from "next/link";
import SignIn from "../components/SignIn";
import IntroMessage from "../components/IntroMessage";
import InputFlex from "../components/InputFlex";
import PrimaryButton from "../components/PrimaryButton";
import { Router, useRouter } from "next/router";

const SignUpSix = () => {
  const router = useRouter()
  return (
    <div>
      <div className="max-w-[826px] mx-auto">
        <div className="max-w-[826px] mx-auto bg-white rounded-md border border-offWhite">
          <SignIn signInText="RESET PASSWORD" />
          <div className="lg:ml-20 ml-4 lg:mr-20 mr-4">
            <IntroMessage
              welcome="Reset your password"
              provideInfo="Please carefully create a new password  and  confirm reset to sign in to
              your account"
            />
            <div className="mt-20 mb-20">
              <InputFlex
                leftIcon="/lock.svg"
                rightIcon="/eye.svg"
                placeholder="New password"
              />

              <InputFlex
                leftIcon="/lock.svg"
                rightIcon="/eye.svg"
                placeholder="Confirm new password"
              />
            </div>

            <PrimaryButton btnText="CONFIRM PASSWORD RESET"  onClick={()=>router.push('/')} />
            <div className="my-10 mb-10 mt-10  lg:flex-row flex flex-col justify-between items-center ">
              <p className="text-xl text-blueText mb-10">
               <Link href="/"> Sign In</Link>
              </p>
              <p className="text-xl text-lightBlue mb-10">
                <Link href="/"> Don’t have an account?</Link>    <br className="lg:hidden" /> <Link href="/sign-up">Sign up
                  here</Link>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSix;

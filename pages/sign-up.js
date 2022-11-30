import React from "react";
import Link from "next/link";
import SignIn from "../components/SignIn";
import IntroMessage from "../components/IntroMessage";

function SignUp() {
  return (
    <>
      <div>
        <div className="max-w-[826px] mx-auto">
          <div className="max-w-[826px] mx-auto bg-white rounded-md border border-offWhite">
            <SignIn signInText="SIGN UP" />
            <div className="lg:ml-20 ml-4 lg:mr-20 mr-4">
              <IntroMessage
                welcome="Create your account"
                provideInfo="Choose an option for the type of account you would like to create"
              />

              <div className="mt-20 flex lg:flex-row flex-col justify-between">
                <Link href="/sign-up-pricing">
                  <img
                    src="/church.svg"
                    alt="church-building"
                    className="border hover:border-2 hover:border-blueColor border-greyBorder rounded-md cursor-pointer"
                  />
                </Link>{" "}

                <Link href="/sign-up-church"><img
                  src="/staff.svg"
                  alt="church-staff"
                  className="border hover:border-2 hover:border-blueColor border-greyBorder rounded-md cursor-pointer"
                /></Link>
              </div>
              <p className=" text-lightBlack text-xl mt-20 mb-10">
                Please select this option to setup a new church account for the
                first time
              </p>
              <div className="my-10 mb-10 mt-10  lg:flex-row flex flex-col justify-between items-center ">
                <p className="text-xl text-lightBlue mb-10">
                  <Link href="/">Already have an account?</Link>{" "}
                  <br className="lg:hidden" />{" "}
                  <Link href="/">Sign in here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

import React from "react";
import Link from "next/link";
import SignIn from "../components/SignIn";
import IntroMessage from "../components/IntroMessage";
import ChurchInput from "../components/ChurchInput";
import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "next/router";

const SignUpTwo = () => {
const router = useRouter()

  return (
    <div>
      <div className="max-w-[826px] mx-auto">
        <div className="max-w-[826px] mx-auto bg-white rounded-md border border-offWhite">
          <SignIn signInText="SIGN UP" />
          <div className="lg:ml-20 ml-4 lg:mr-20 mr-4">
            <IntroMessage
              welcome="Confirm your church details"
              provideInfo="Provide the phone number associated with your churcht"
            />
            <p className=" text-lightBlack text-xl mt-10 mb-0">
              Enter your church handle
            </p>
            <ChurchInput
              placeholder="Enter your handle"
              successIcon="/squareSuccessIcon.svg"
            />

            <div className="mt-10 mb-10 flex lg:flex-row flex-col gap-20 items-center">
              <img src="/pastor.svg" alt="Pastor" />
             <div>
                <h2 className="text-2xl text-darkBlue font-bold mb-2">Deallus Church Ministries</h2>
                <p className="text-blueText font-bold text-xl ">Pst. Dorris Beautittude</p>
                <p className="text-lightBlack text-xl ">Ikeja, Lagos, Nigeria</p>
            </div>
            </div>
            <PrimaryButton btnText="PROCEED " onClick={()=>router.push('/sign-up-three')} />

            <div className="my-10 mb-10 mt-10  lg:flex-row flex flex-col justify-between items-center ">
              <p className="text-xl text-lightBlue mb-10">
                <Link href="/">Already have an account?</Link> <br className="lg:hidden" /> <Link href="/">Sign in
                here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpTwo;

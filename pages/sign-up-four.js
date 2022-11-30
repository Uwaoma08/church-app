import React from "react";
import Link from "next/link";
import SignIn from "../components/SignIn";
import IntroMessage from "../components/IntroMessage";
import InputFlex from "../components/InputFlex";
import PrimaryButton from "../components/PrimaryButton";
import ChurchInput from "../components/ChurchInput";
import { useRouter } from "next/router";
import BackIcon from "../components/Icons/BackIcon";
import { LockIcon } from "../components/Icons/LockIcon";
import HomeIcon from "../components/Icons/HomeIcon";
import EmailIcon from "../components/Icons/EmailIcon";
import EyeIcon from "../components/Icons/EyeIcon";
import CloseIcon from "../components/Icons/CloseIcon";


const SignUpFour = () => {
  const router = useRouter()
  return (
    <div>
      <div className="max-w-[826px] mx-auto relative">
        <div className="max-w-[826px] mx-auto bg-white rounded-md border border-offWhite">
          <SignIn signInText="SIGN UP" />
          <div className=" lg:ml-20 ml-4 lg:mr-20 mr-4">
            <IntroMessage
              welcome="Register your church details"
              provideInfo="Setup your church basic profile"
            />
            <div className=" lg:flex md:flex hidden absolute right-0 top-24 max-w-[286px] h-[79px] bg-[#FE8F29] text-center items-center pr-20 pl-2.5 text-base  text-white justify-start rounded-md">
              <p>Yearly members and visitors up to 2,500</p>
            </div>

            <InputFlex
             icon={<HomeIcon className="stroke-current " />}
             icon2={<CloseIcon className="stroke-current " />}
              placeholder="Church name"
              type="text"
            />
            <InputFlex
               icon={<EmailIcon className="stroke-current " />}
              placeholder="Church email address"
              type="email"
            />

            <ChurchInput
              placeholder="Church handle"
              type="text"
              
            />
            <InputFlex
              icon={<LockIcon className="stroke-current " />}
              icon2={<EyeIcon className="stroke-current " />}
              placeholder="Choose a password for your church"
              type="password"
            />

            <p className=" text-lightBlack text-xl mt-10 mb-0">
              Referal ID (optional)
            </p>
            <InputFlex
             icon={<BackIcon className="stroke-current " />}
             
              placeholder="Enter referal ID"
              type="text"
            />
            <PrimaryButton btnText="SUBMIT AND GET STARTED" onClick={()=>router.push('/sign-up-congrats')} />
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

export default SignUpFour;

import React from "react";
import Link from "next/link";
import SignIn from "../components/SignIn";
import IntroMessage from "../components/IntroMessage";
import InputFlex from "../components/InputFlex";
import PrimaryButton from "../components/PrimaryButton";
import { useRouter } from "next/router";
import { UserIcon } from "../components/Icons/UserIcon";
import EmailIcon from "../components/Icons/EmailIcon";
import { LockIcon } from "../components/Icons/LockIcon";
import EyeIcon from "../components/Icons/EyeIcon";

function SignUpThree() {
  const router = useRouter();
  return (
    <div>
      <div className="max-w-[826px] mx-auto">
        <div className="max-w-[826px] mx-auto bg-white rounded-md border border-offWhite">
          <SignIn signInText="SIGN UP" />
          <div className="lg:ml-20 ml-4 lg:mr-20 mr-4">
            <IntroMessage
              welcome="Please register your details"
              provideInfo="Setup your personal profile"
            />
            <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center pb-0">
              <InputFlex placeholder="First Name" 
              icon={<UserIcon className="stroke-current "/>}
              />
              <InputFlex placeholder="Last Name" 
              icon={<UserIcon className="stroke-current " />}
              />
            </div>

            <InputFlex leftIcon="/message.svg" placeholder="Email" 
            icon={<EmailIcon className="stroke-current " />}
            />
            <InputFlex
              icon={<LockIcon className="stroke-current " />}
              placeholder="Choose password"
              icon2={<EyeIcon className="stroke-current " />}
            />
            <PrimaryButton
              onClick={() => router.push("/sign-up-congrats")}
              btnText="SUBMIT AND GET STARTED"
            />
            <div className="my-10 mb-10 mt-10  lg:flex-row flex flex-col justify-between items-center ">
              <p className="text-xl text-lightBlue mb-10">
                <Link href="/">Already have an account?</Link>{" "}
                <br className="lg:hidden" /> <Link href="/">Sign in here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpThree;

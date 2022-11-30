import React from "react";
import Pricing from "../components/Pricing";

const SignUpPricing = () => {
  return (
    <div className="max-w-[1920] lg:mx-10 md:mx-10 mx-5 ">
      <div className="flex flex-col items-center ">
        <div className="flex items-center jusify-center gap-4">
          <h2 className="text-4xl text-navColor">Plans and Pricing</h2>
          <img src="/circleSmall.svg" />
        </div>
        <p className="max-w-[500px] text-center text-xl text-greyColor mb-20 mt-6">
          All plans and pricing comes with 30 days free trial and includes all
          features. Select a plan to set up your church
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        <Pricing
          size="100"
          bgImg="greenIcon.svg"
          nairaPrice="3,500"
          dollarPrice="10"
          yearlyVisitors="0 - 100"
          btnColor="bg-[#55d883]"
        />
        <Pricing
          size="250"
          bgImg="orangeIcon.svg"
          nairaPrice="5,000"
          dollarPrice="14"
          yearlyVisitors="101 - 250"
          btnColor="bg-[#fe8f29]"
        />
        <Pricing
          size="500"
          bgImg="purpleIcon.svg"
          nairaPrice="6,500"
          dollarPrice="18"
          yearlyVisitors="251 - 500"
          btnColor="bg-[#5f0cc9]"
        />
        <Pricing
          size="1000"
          bgImg="darkBlueIcon.svg"
          nairaPrice="9,500"
          dollarPrice="25"
          yearlyVisitors="501 - 1000"
          btnColor="bg-[#0b3fa8]"
        />
        <Pricing
          size="2500"
          bgImg="lightBlueIcon.svg"
          nairaPrice="15,000"
          dollarPrice="42"
          yearlyVisitors="1001 - 2500"
          btnColor="bg-[#29befe]"
        />
        <Pricing
          size="400"
          bgImg="greenIcon.svg"
          nairaPrice="20,000"
          dollarPrice="56"
          yearlyVisitors="2501 - 4000"
          btnColor="bg-[#dc0660]"
        />
        <Pricing
          bgImg="greenIcon.svg"
          nairaPrice="30,000"
          dollarPrice="100"
          btnColor="bg-[#2c3b4e]"
        />
      </div>
    </div>
  );
};

export default SignUpPricing;

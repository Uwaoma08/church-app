import React from "react";

const Princing = ({
  size,
  bgImg,
  nairaPrice,
  dollarPrice,
  yearlyVisitors,
  btnColor,
}) => {
  return (
    <div className="hover:scale-95 cursor-pointer">
      <div className="max-w-[457px] bg-white rounded-md border border-offWhite pd-20">
        <div className="border-b border-offWhite flex justify-between p-6">
          <h3 className="text-navColor font-bold text-lg">
            {size
              ? `Congregation size upto ${size}`
              : "Unlimited members and visitors"}
          </h3>
          <img src={bgImg} />
        </div>

        <div className="p-6">
          <div className="flex justify-between">
            <div>
              <p className="text-base text-lightBlack font-bold">NGA/Month</p>
              <h1 className="text-4xl text-blueColor font-bold">
                {nairaPrice}
              </h1>
              <p className="text-xl text-greyColor leading-8 ">Bill Yearly</p>
            </div>
            <div>
              <p className="text-base text-lightBlack font-bold">NGA/Month</p>
              <h1 className="text-4xl text-blueColor font-bold">
                {" "}
                ${dollarPrice}
              </h1>
              <p className="text-xl text-greyColor ">Bill Yearly</p>
            </div>
          </div>
          <p className="text-xl text-lightBlack my-10 leading-6">
            {yearlyVisitors
              ? `Selecting this plans means that your yearly members and visitors are
            between ${yearlyVisitors} in size`
              : " Selecting this plan means your yearly members and visitors are above 4000 "}
          </p>

          <button
            className={`${btnColor} hover:brightness-75 uppercase h-[62px] rounded-md text-xl text-white max-w-[100%] w-full drop-shadow-2xl  mb-5`}
          >
            select plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Princing;

import React from "react";

const Footer = () => {
  return (
    <footer className={`max-w-[1920px]  bg-banner relative pb-10`}>
      <div className="w-full h-full bg-blueColor opacity-90 absolute top-0 left-0 z-0"></div>
      <div className=" LG:mx-20 mx-10 pt-20 pb-20 relative z-10">
        <div className=" lg:block flex items-center justify-center">
        <img src="/logo-footer.svg" className="mb-20" />
        </div>
        <div className="flex lg:flex-row flex-col justify-between lg:pd-20 pb-0 lg:text-left text-center">
          <div className="mb-20">
            <p className="text-xl text-white mb-8 uppercase">About</p>
            <ul>
              <li className="text-xl text-white mb-4 font-normal ">Deallus</li>
              <li className="text-xl text-white mb-4 ">Team</li>
              <li className="text-xl text-white mb-4 ">Mission</li>
            </ul>
          </div>

          <div className="mb-20">
            <p className="text-lg text-white mb-8 uppercase">Churches</p>
            <ul>
              <li className="text-base text-white mb-4 ">
                Course Title Stays Here
              </li>
              <li className="text-base text-white mb-4 ">Course Title Here</li>
              <li className="text-base text-white mb-4 ">Course Title Stays</li>
              <li className="text-base text-white mb-4 ">Course Title Ok</li>
            </ul>
          </div>

          <div className="mb-20">
            <p className="text-lg text-white mb-8 uppercase">Blog</p>
            <ul>
              <li className="text-base text-white mb-4 ">Catalogs</li>
              <li className="text-base text-white mb-4 ">Tools</li>
              <li className="text-base text-white mb-4 ">Mentors</li>
              <li className="text-base text-white mb-4 ">Guardians</li>
            </ul>
          </div>

          <div className="mb-20">
            <p className="text-xl text-white mb-8 uppercase">Developers</p>
            <ul>
              <li className="text-base text-white mb-4 ">API</li>
              <li className="text-base text-white mb-4 ">Documentation</li>
              <li className="text-base text-white mb-4 ">Churches</li>
              <li className="text-base text-white mb-4 ">Jobs</li>
            </ul>
          </div>

          <div>
            <p className="text-lg text-white mb-8 uppercase">Support</p>
            <ul>
              <li className="text-base text-white mb-4 ">Contact Us</li>
              <li className="text-base text-white mb-4 ">Help and FAQs</li>
              <li className="text-base text-white mb-4 ">Mentors</li>
              <li className="texbasebase text-white mb-4 ">Community</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-lightBlackBorderColor relative z-10">
        <div className="flex lg:flex-row flex-col justify-between items-center pt-20 mx-10">
          {/* <div className="flex flex-row "> */}
          <p className="text-base text-white mb-10 text-center">
            Copyright 2019, Deallus Church. Allrights reserved.
          </p>
          <div className="mb-10">
            <ul className=" flex lg:flex-row lg:gap-4 flex-col justify-between   text-white">
              <li className="text-base">Legal & privacy .</li>
              <li className="text-base ">Terms of use .</li>
              <li className="text-base ">Site map </li>
            </ul>
          </div>
          {/* </div> */}
          <div className="flex flex-row gap-10">
            <img src="/instagram.svg" />
            <img src="/twitter.svg" />
            <img src="/google.svg" />
            <img src="/facebook.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Menu = () => {
  return (
    <div className="lg:block md:block hidden">
      <ul className="flex justify-center gap-4 mt-10 mb-20">
        <li className="text-xl text-menuColor">About .</li>
        <li className="text-xl text-menuColor">Contact .</li>
        <li className="text-xl text-menuColor">Terms .</li>
        <li className="text-xl text-menuColor">Privacy policy</li>
        <li className="text-xl text-menuColor">Features .</li>
      </ul>
    </div>
  );
};

export default Menu;

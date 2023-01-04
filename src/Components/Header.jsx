import React from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

const numberClasses =
  "font-ubuntu font-medium border-solid border-[1.7px] border-white px-4 py-2 rounded-full cursor-default";

function Header() {
  const location = useLocation().pathname;

  return (
    <div className="header absolute -z-10 md:relative md:z-0 md:rounded-xl">
      {/* Numbers */}
      <div className="flex flex-row justify-center items-start space-x-5 h-full pt-9 md:flex-col md:space-x-0 md:justify-start md:space-y-7 md:pl-8 md:pb-48">
        <div className="md:flex md:flex-row md:items-center md:justify-start md:space-x-5">
          <h3
            className={
              location === "/info"
                ? numberClasses + " text-marineBlue-1 bg-lightBlue"
                : numberClasses + "  text-magnolia"
            }
          >
            1
          </h3>
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-ubuntu text-xs text-pastelBlue text-left hidden md:block">STEP 1</h4>
            <h4 className="font-ubuntu  font-medium text-white text-left hidden md:block">YOUR INFO</h4>
          </div>
        </div>
        <div className="md:flex md:flex-row md:items-center md:justify-start md:space-x-5">
          <h3
            className={
              location === "/plan"
                ? numberClasses + " text-marineBlue-1 bg-lightBlue"
                : numberClasses + "  text-magnolia"
            }
          >
            2
          </h3>
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-ubuntu text-xs text-pastelBlue text-left hidden md:block">STEP 2</h4>
            <h4 className="font-ubuntu  font-medium text-white text-left hidden md:block">SELECT PLAN</h4>
          </div>
        </div>
        <div className="md:flex md:flex-row md:items-center md:justify-start md:space-x-5">
          <h3
            className={
              location === "/addons"
                ? numberClasses + " text-marineBlue-1 bg-lightBlue"
                : numberClasses + "  text-magnolia"
            }
          >
            3
          </h3>
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-ubuntu text-xs text-pastelBlue text-left hidden md:block">STEP 3</h4>
            <h4 className="font-ubuntu  font-medium text-white text-left hidden md:block">ADD-ONS</h4>
          </div>
        </div>
        <div className="md:flex md:flex-row md:items-center md:justify-start md:space-x-5">
          <h3
            className={
              location === "/summary" || location === "/thanks"
                ? numberClasses + " text-marineBlue-1 bg-lightBlue"
                : numberClasses + "  text-magnolia"
            }
          >
            4
          </h3>
          <div className="flex flex-col items-start justify-center">
            <h4 className="font-ubuntu text-xs text-pastelBlue text-left hidden md:block">STEP 4</h4>
            <h4 className="font-ubuntu  font-medium text-white text-left hidden md:block">SUMMARY</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

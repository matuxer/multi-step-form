import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../Components/Header";
import thanksIcon from "../images/icon-thank-you.svg";

function Thanks() {
const { plan } = useSelector(state => state.summary.value);

  if (!plan.name) {
    return <Navigate to="/plan" />
  }

  return (
    <div className="flex h-screen md:justify-center md:items-center md:w-full md:py-10">
      <div className="flex flex-col justify-between w-full md:flex-row  md:items-start md:bg-white md:p-4 md:pr-0 md:rounded-xl md:w-3/4 md:h-full">
        <Header />
        <div className="h-full flex justify-center md:items-center md:px-20  md:w-4/6 ">
          <div className="container mx-auto pt-[120px] md:pt-0">
            <div className="flex flex-col justify-center items-center bg-white px-10 py-20 rounded-lg drop-shadow-md md:drop-shadow-none">
              <img
                src={thanksIcon}
                className="h-16 mb-5"
                alt="Thank You Icon"
              />
              <h1 className="font-ubuntu font-bold text-marineBlue-1 text-2xl md:text-3xl md:tracking-wide md:text-center">
                Thank you!
              </h1>
              <p className="mt-3 font-ubuntu text-coolGray text-center leading-relaxed">
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thanks;

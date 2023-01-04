import React, { useEffect, useState } from "react";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectPlan } from "../features/summary/summarySlice";
import { freqSwitch } from "../features/frequency/frequencySlice";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const yrPromoClasses = "mt-1 font-ubuntu text-xs text-marineBlue-1";
const labelClasses =
  "mt-3 cursor-pointer flex flex-row items-center justify-start space-x-4 w-full border-[1.6px] border-solid border-lightGray p-4 rounded-lg hover:border-purplishBlue-1 md:flex-col md:justify-between md:items-start md:space-x-0 md:space-y-12 md:pt-5";
const switchH4Classes = "font-ubuntu text-sm font-medium";

export default function Plan() {
  const frequency = useSelector((state) => state.frequency.value);
  const dispatch = useDispatch();

  const [plan, setPlan] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.name);
    setPlan({ name: e.target.name, price: e.target.value });
  };

  useEffect(() => {
    if (frequency === "yearly") {
      console.log(frequency);
      dispatch(freqSwitch());
    }
  }, []);

  return (
    <div className="flex h-screen md:justify-center md:items-center md:w-full md:py-10">
      <div className="flex flex-col justify-between w-full md:flex-row  md:items-start md:bg-white md:p-4 md:pr-0 md:rounded-xl md:w-3/4 md:h-full">
        <Header />
        <div className="flex flex-col justify-between h-full md:px-20  md:w-4/6 ">
          <div className="container mx-auto pt-[120px] md:pt-9">
            <div className="bg-white px-7 pt-9 pb-5 rounded-lg drop-shadow-md md:drop-shadow-none md:space-y-5 md:p-0">
              <h1 className="font-ubuntu font-bold text-marineBlue-1 text-2xl md:text-3xl">
                Select your plan
              </h1>
              <p className="mt-3 font-ubuntu text-coolGray text-left">
                You have the option of monthly or yearly billing.
              </p>

              <div className="flex flex-col md:flex-row md:justify-between md:gap-x-3">
              {/* Arcade */}
                <input
                  type="checkbox"
                  className="appearance-none hidden peer/arcade"
                  name="arcade"
                  id="arcade"
                  value={9}
                  checked={selectedOption === "arcade"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="arcade"
                  className={
                    labelClasses +
                    " peer-checked/arcade:bg-magnolia peer-checked/arcade:border-purplishBlue-1"
                  }
                >
                  <img src={arcade} className="self-start" alt="arcade icon" />
                  <div className="flex flex-col items-start">
                    <h2 className="font-ubuntu font-medium text-marineBlue-1">
                      Arcade
                    </h2>
                    <p className="font-ubuntu text-sm text-coolGray">
                      ${frequency === "monthly" ? "9/mo" : "90/yr"}
                    </p>
                    <p
                      className={
                        frequency !== "yearly"
                          ? `${yrPromoClasses} hidden`
                          : yrPromoClasses
                      }
                    >
                      2 months free
                    </p>
                  </div>
                </label>

                {/* Advanced */}
                <input
                  type="checkbox"
                  className="appearance-none hidden peer/advanced"
                  name="advanced"
                  id="advanced"
                  value={12}
                  checked={selectedOption === "advanced"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="advanced"
                  className={
                    labelClasses +
                    " peer-checked/advanced:bg-magnolia peer-checked/advanced:border-purplishBlue-1"
                  }
                >
                  <img
                    src={advanced}
                    className="self-start"
                    alt="advanced icon"
                  />
                  <div className="flex flex-col items-start">
                    <h2 className="font-ubuntu font-medium text-marineBlue-1">
                      Advanced
                    </h2>
                    <p className="font-ubuntu text-sm text-coolGray">
                      ${frequency === "monthly" ? "12/mo" : "120/yr"}
                    </p>
                    <p
                      className={
                        frequency !== "yearly"
                          ? `${yrPromoClasses} hidden`
                          : yrPromoClasses
                      }
                    >
                      2 months free
                    </p>
                  </div>
                </label>

                {/* Pro */}
                <input
                  type="checkbox"
                  className="appearance-none hidden peer/pro"
                  name="pro"
                  id="pro"
                  value={15}
                  checked={selectedOption === "pro"}
                  onChange={handleOptionChange}
                />
                <label
                  htmlFor="pro"
                  className={
                    labelClasses +
                    " peer-checked/pro:bg-magnolia peer-checked/pro:border-purplishBlue-1"
                  }
                >
                  <img src={pro} className="self-start" alt="pro icon" />
                  <div className="flex flex-col items-start">
                    <h2 className="font-ubuntu font-medium text-marineBlue-1">
                      Pro
                    </h2>
                    <p className="font-ubuntu text-sm text-coolGray">
                      ${frequency === "monthly" ? "15/mo" : "150/yr"}
                    </p>
                    <p
                      className={
                        frequency !== "yearly"
                          ? `${yrPromoClasses} hidden`
                          : yrPromoClasses
                      }
                    >
                      2 months free
                    </p>
                  </div>
                </label>
              </div>
              <div className="mt-4 flex flex-row items-center justify-center space-x-5 bg-alabaster py-3 rounded-lg md:mt-7">
                <h4
                  className={
                    frequency === "monthly"
                      ? `${switchH4Classes} text-marineBlue-1`
                      : `${switchH4Classes} text-coolGray`
                  }
                >
                  Monthly
                </h4>
                <label className="relative inline-block w-9 h-5">
                  <input
                    className="appearance-none hidden peer/switch"
                    onChange={() => dispatch(freqSwitch())}
                    type="checkbox"
                  />
                  <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-marineBlue-1 rounded-full duration-[400ms] before:absolute before:content-[''] before:h-3 before:w-3 before:rounded-3xl before:left-[0.27em] before:bottom-[0.25em] before:bg-white before:duration-[400ms] peer-checked/switch:before:translate-x-4"></span>
                </label>
                <h4
                  className={
                    frequency === "yearly"
                      ? `${switchH4Classes} text-marineBlue-1`
                      : `${switchH4Classes} text-coolGray`
                  }
                >
                  Yearly
                </h4>
              </div>
            </div>
          </div>

          <div className="w-full bg-alabaster">
            <div className="container mx-auto flex justify-between items-cente w-full py-4 px-3 sm:px-0">
              <Link to="/info">
                <button className="font-ubuntu text-coolGray text-sm py-[10px] rounded-[4px] hover:text-marineBlue-1">
                  Go back
                </button>
              </Link>
              <Link to="/addons">
                <button
                  onClick={() => dispatch(selectPlan(plan))}
                  disabled={Object.keys(plan).length < 2}
                  className="bg-marineBlue-1 font-ubuntu text-lightGray text-sm px-4 py-[10px] rounded-[4px] disabled:bg-marineBlue-1 hover:bg-marineBlue-2"
                >
                  Next Step
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

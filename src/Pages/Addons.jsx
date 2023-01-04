import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Header from "../Components/Header";
import { selectAddons } from "../features/summary/summarySlice";
import checkmark from "../images/icon-checkmark.svg";

const labelClasses =
  "mt-3 cursor-pointer flex flex-row items-center justify-start space-x-4 w-full border-[1.6px] border-solid border-lightGray p-5 pl-5 rounded-lg hover:border-purplishBlue-1";
const checkboxClasses =
  "flex items-center justify-center relative border-[1.5px] border-lightGray top-0 left-0 h-6 w-6 rounded-md";

function Addons() {
  const frequency = useSelector((state) => state.frequency.value);
  const { plan } = useSelector(state => state.summary.value);
  const dispatch = useDispatch();

  const [addons, setAddons] = useState([]);
  const [checked, setChecked] = useState({
    1: false,
    2: false,
    3: false,
  });

  const handleChange = (e) => {
    setChecked((prevState) => ({
      ...prevState,
      [e.target.id]: !prevState[e.target.id],
    }));
    let addonsList = [...addons];
    if (e.target.checked) {
      addonsList = [
        ...addons,
        { id: e.target.id, name: e.target.name, price: e.target.value },
      ];
    } else {
      addonsList.splice(
        addons.indexOf({
          id: e.target.id,
          name: e.target.name,
          price: e.target.value,
        }),
        1
      );
    }
    setAddons(() => {
      return [...addonsList];
    });
  };

  const handleClick = () => {
    if (addons.length > 0) {
      dispatch(selectAddons(addons));
    }
  };

  if (!plan.name) {
    return <Navigate to="/plan" />
  }

  return (
    <div className="flex h-screen md:justify-center md:items-center md:w-full md:py-10">
      <div className="flex flex-col justify-between w-full md:flex-row  md:items-start md:bg-white md:p-4 md:pr-0 md:rounded-xl md:w-3/4 md:h-full">
        <Header />
        <div className="flex flex-col justify-between h-full md:px-20  md:w-4/6 ">

          <div className="container mx-auto pt-[120px] md:pt-9">
            <div className="bg-white px-7 pt-9 pb-7 rounded-lg drop-shadow-md md:drop-shadow-none md:space-y-5 md:p-0">
              <h1 className="font-ubuntu font-bold text-marineBlue-1 text-2xl md:text-3xl">
                Pick add-ons
              </h1>
              <p className="mt-3 font-ubuntu text-coolGray text-left">
                Add-ons help enhance your gaming experience.
              </p>

              {/* Online service */}
              <input
                type="checkbox"
                className="appearance-none hidden peer/oService"
                name="Online service"
                id="1"
                value={1}
                onChange={handleChange}
              />
              <label
                htmlFor="1"
                className={
                  labelClasses +
                  " peer-checked/oService:bg-magnolia peer-checked/oService:border-purplishBlue-1"
                }
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-start space-x-4">
                    <div
                      className={
                        checked[1]
                          ? checkboxClasses +
                            " bg-purplishBlue-1 border-transparent "
                          : checkboxClasses
                      }
                    >
                      <img
                        src={checkmark}
                        className={checked[1] ? "h-3" : "hidden"}
                        alt="checkmark icon"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-ubuntu font-medium text-marineBlue-1">
                        Online service
                      </h2>
                      <p className="font-ubuntu text-sm text-coolGray">
                        Access to multiplayer games
                      </p>
                    </div>
                  </div>
                  <p className="font-ubuntu text-sm text-purplishBlue-1">
                    ${frequency === "monthly" ? "1/mo" : "10/yr"}
                  </p>
                </div>
              </label>

              {/* Larger storage */}
              <input
                type="checkbox"
                className="appearance-none hidden peer/lStorage"
                name="Larger storage"
                id="2"
                value={2}
                onChange={handleChange}
              />
              <label
                htmlFor="2"
                className={
                  labelClasses +
                  " peer-checked/lStorage:bg-magnolia peer-checked/lStorage:border-purplishBlue-1"
                }
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-start space-x-4">
                    <div
                      className={
                        checked[2]
                          ? checkboxClasses +
                            " bg-purplishBlue-1 border-transparent "
                          : checkboxClasses
                      }
                    >
                      <img
                        src={checkmark}
                        className={checked[2] ? "h-3" : "hidden"}
                        alt="checkmark icon"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-ubuntu font-medium text-marineBlue-1">
                        Larger storage
                      </h2>
                      <p className="font-ubuntu text-sm text-coolGray">
                        Extra 1TB of cloud save
                      </p>
                    </div>
                  </div>
                  <p className="font-ubuntu text-sm text-purplishBlue-1">
                    ${frequency === "monthly" ? "2/mo" : "20/yr"}
                  </p>
                </div>
              </label>

              {/* Customizable Profile */}
              <input
                type="checkbox"
                className="appearance-none hidden peer/cProfile"
                name="Customizable profile"
                id="3"
                value={2}
                onChange={handleChange}
              />
              <label
                htmlFor="3"
                className={
                  labelClasses +
                  " peer-checked/cProfile:bg-magnolia peer-checked/cProfile:border-purplishBlue-1"
                }
              >
                <div className="w-full flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center justify-start space-x-4">
                    <div
                      className={
                        checked[3]
                          ? checkboxClasses +
                            " bg-purplishBlue-1 border-transparent "
                          : checkboxClasses
                      }
                    >
                      <img
                        src={checkmark}
                        className={checked[3] ? "h-3" : "hidden"}
                        alt="checkmark icon"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-ubuntu font-medium text-marineBlue-1">
                        Customizable Profile
                      </h2>
                      <p className="font-ubuntu text-sm text-coolGray">
                        Custom theme on your profile
                      </p>
                    </div>
                  </div>
                  <p className="font-ubuntu text-sm text-purplishBlue-1">
                    ${frequency === "monthly" ? "2/mo" : "20/yr"}
                  </p>
                </div>
              </label>
            </div>
          </div>

          <div className="w-full bg-alabaster">
            <div className="container mx-auto flex justify-between items-cente w-full py-4 ">
              <Link to="/plan">
                <button className="font-ubuntu text-coolGray text-sm py-[10px] rounded-[4px] hover:text-marineBlue-1">
                  Go back
                </button>
              </Link>
              <Link to="/summary">
                <button
                  onClick={handleClick}
                  className="bg-marineBlue-1 font-ubuntu text-lightGray text-sm px-4 py-[10px] rounded-[4px] hover:bg-marineBlue-2"
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

export default Addons;

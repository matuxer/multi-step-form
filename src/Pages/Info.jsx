import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";

const validate = (input) => {
  let error = {};
  if (input.name.length === 0) {
    error.name = "This field is required";
  }
  if (input.email.length === 0) {
    error.email = "This field is required";
  }
  if (input.phone.length === 0) {
    error.phone = "This field is required";
  }
  return error;
};

const inputClasses =
  "appearance-none border-2 rounded-md w-full mb-3 px-4 py-2 placeholder:font-ubuntu focus:outline-none";

const labelClasses = "font-ubuntu font-medium text-strawberryRed text-xs";

function Info() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [input, setInput] = useState(initialState);
  const [error, setError] = useState({ name: "" });

  let handleOnChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    let error = validate({ ...input, [e.target.name]: e.target.value });
    setError(error);
  };

  return (
    <div className="flex h-screen md:justify-center md:items-center md:w-full md:py-10">
      <div className="flex flex-col justify-between w-full md:flex-row  md:items-start md:bg-white md:p-4 md:pr-0 md:rounded-xl md:w-3/4 md:h-full">
        <Header />
        <div className="flex flex-col justify-between h-full md:px-20  md:w-4/6 ">
          {/* Form */}
          <div className="container mx-auto pt-[120px] md:pt-9">
            <div className="bg-white px-7 pt-9 pb-7 rounded-lg drop-shadow-md md:drop-shadow-none md:space-y-5 md:p-0">
              <h1 className="font-ubuntu font-bold text-marineBlue-1 text-2xl md:text-3xl">
                Personal info
              </h1>
              <p className="mt-3 font-ubuntu text-coolGray text-left">
                Please provide your name, email address, and phone number.
              </p>

              <form className="mt-4" autoComplete="off">
                <div className="flex flex-row justify-between mb-1 mt-4">
                  <label className="font-ubuntu text-marineBlue-1 text-xs">
                    Name
                  </label>
                  <label
                    className={
                      error.name !== "This field is required"
                        ? `${labelClasses} hidden`
                        : labelClasses
                    }
                  >
                    This field is required
                  </label>
                </div>
                <input
                  placeholder="e.g. Stephen King"
                  name="name"
                  className={
                    error.name !== "This field is required"
                      ? `${inputClasses} border-lightGray focus:border-purplishBlue-1`
                      : `${inputClasses} border-strawberryRed focus:border-strawberryRed`
                  }
                  type="text"
                  onChange={handleOnChange}
                />
                <div className="flex flex-row justify-between mb-1 mt-4">
                  <label className="font-ubuntu text-marineBlue-1 text-xs">
                    Email Address
                  </label>
                  <label
                    className={
                      error.email !== "This field is required"
                        ? `${labelClasses} hidden`
                        : labelClasses
                    }
                  >
                    This field is required
                  </label>
                </div>
                <input
                  placeholder="e.g. stephenking@lorem.com"
                  name="email"
                  className={
                    error.email !== "This field is required"
                      ? `${inputClasses} border-lightGray focus:border-purplishBlue-1`
                      : `${inputClasses} border-strawberryRed focus:border-strawberryRed`
                  }
                  type="text"
                  onChange={handleOnChange}
                />
                <div className="flex flex-row justify-between mb-1 mt-4">
                  <label className="font-ubuntu text-marineBlue-1 text-xs">
                    Phone Number
                  </label>
                  <label
                    className={
                      error.phone !== "This field is required"
                        ? `${labelClasses} hidden`
                        : labelClasses
                    }
                  >
                    This field is required
                  </label>
                </div>
                <input
                  placeholder="e.g. +1 234 567 890"
                  name="phone"
                  className={
                    error.phone !== "This field is required"
                      ? `${inputClasses} border-lightGray focus:border-purplishBlue-1`
                      : `${inputClasses} border-strawberryRed focus:border-strawberryRed`
                  }
                  type="text"
                  onChange={handleOnChange}
                />
              </form>
            </div>
          </div>
          {/* Next Step Button */}
          <div className="w-full bg-alabaster md:bg-white">
            <div className="container mx-auto flex justify-end items-cente w-full py-4 ">
              <Link to="/plan">
                <button
                  disabled={Object.keys(error).length > 0}
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

export default Info;

import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import AddonsSelected from "../Components/AddonsSelected";
import Header from "../Components/Header";

const firstUpperCase = (str) => {
  let res = [];
  str = str.trim();
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    i === 0 ? res.push(el.toUpperCase()) : res.push(el);
  }
  return res.join("");
};

function Summary() {
  const frequency = useSelector((state) => state.frequency.value);
  const { plan, addons } = useSelector((state) => state.summary.value);

  let total = Number(plan.price);
  if (addons.length > 0) {
    for (let i = 0; i < addons.length; i++) {
      const el = Number(addons[i].price);
      total += el;
    }
  }

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
                Finishing up
              </h1>
              <p className="mt-3 font-ubuntu text-coolGray text-left">
                Double-check everything looks OK before confirming.
              </p>
              <div className="flex flex-col space-y-3 mt-5 bg-magnolia rounded-lg w-full px-7 py-5 md:space-y-5 md:pb-8">
                {/* Plan Selected */}
                <div className="flex flex-row justify-between items-center border-solid border-b-[1px] border-lightGray pb-3 md:pb-6">
                  <div className="flex flex-col items-start justify-center">
                    <h3 className="font-ubuntu font-medium text-sm text-marineBlue-1">
                      {firstUpperCase(plan.name)} ({firstUpperCase(frequency)})
                    </h3>
                    <Link
                      to="/plan"
                      className="font-ubuntu text-sm text-coolGray underline decoration-solid decoration-coolGray decoration-2 hover:text-purplishBlue-1 hover:decoration-purplishBlue-1"
                    >
                      Change
                    </Link>
                  </div>
                  <h3 className="font-ubuntu font-bold text-sm text-marineBlue-1 ">
                    {frequency === "monthly"
                      ? `$${plan.price}/mo`
                      : `$${plan.price * 10}/yr`}
                  </h3>
                </div>

                {/* Addons Selected */}
                {addons?.map((addon) => {
                  return (
                    <AddonsSelected
                      key={addon.id}
                      addon={addon}
                      frequency={frequency}
                    />
                  );
                })}
              </div>

              {/* Total */}
              <div className="flex flex-row justify-between items-center px-7 mt-7">
                <h4 className="font-ubuntu text-coolGray">
                  {frequency === "monthly"
                    ? "Total (per month)"
                    : "Total (per year)"}
                </h4>
                <h4 className="font-ubuntu font-medium text-purplishBlue-1">
                  {frequency === "monthly"
                    ? `$${total}/mo`
                    : `$${total * 10}/yr`}
                </h4>
              </div>
            </div>
          </div>

          <div className="w-full bg-alabaster">
            <div className="container mx-auto flex justify-between items-cente w-full py-4 ">
              <Link to="/addons">
                <button className="font-ubuntu text-coolGray text-sm py-[10px] rounded-[4px] hover:text-marineBlue-1">
                  Go back
                </button>
              </Link>
              <Link to="/thanks">
                <button className="bg-purplishBlue-1 font-ubuntu text-lightGray text-sm px-5 py-[10px] rounded-[4px] hover:bg-purplishBlue-2">
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;

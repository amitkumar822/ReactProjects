import React, { useEffect, useRef, useState } from "react";
import { topResData } from "../data/Top-Restaurant-chains-Data";
import Cart from "./Cart";
import { MdOutlineFilterList } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

function OnlineDelivery() {
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filterData = [
    {
      path: "Sort By",
    },
    {
      path: "Fast Delivery",
    },
    {
      path: "New on Swiggy",
    },
    {
      path: "Rating 4.1+",
    },
    {
      path: "Offers",
    },
    {
      path: "Rs.300-Rs.600",
    },
    {
      path: "Less than Rs.300",
    },
  ];

  return (
    <div
      className="max-w-[1126px] md:mx-auto md:mt-10 mx-5 mt-7"
      ref={componentRef}
    >
      <div className="flex my-3 items-center justify-between">
        <div className="md:text-[25px] text-[14px] font-bold mb-4">
          Restaurants with online food delivery in Bangalore
        </div>
      </div>

      {/*👉 Filter Implementation */}
      <div
        className={
          isAtTop
            ? "fixed top-0 z-[9999999] bg-white w-full left-0 duration-200"
            : ""
        }
      >
        <div
          className={
            isAtTop
              ? "max-w-[1400px] mx-auto md:flex my-3 gap-3  md:visible"
              : "max-w-[1200px] mx-auto md:flex my-3 gap-3 hidden md:visible"
          }
        >
          <div className="hidden md:flex  md:rounded-full shadow-md border px-5 cursor-pointer hover:text-[blue] items-center gap-1">
            Filter <MdOutlineFilterList className="inline" />
          </div>
          {filterData.map((data, index) => (
            <div
              className="hidden md:flex md:rounded-full py-2 shadow-md border px-5 cursor-pointer hover:text-[blue]"
              key={index}
            >
              {data.path}
            </div>
          ))}
          <div className={isAtTop ? "hidden md:flex" : "hidden"}>
            <input
              className=" w-[320px] h-12 md:rounded-lg pl-3 shadow-md border absolute bg-slate-100 outline-none"
              type="text"
              placeholder="Search for restaurant and food "
            />
            <IoMdSearch className=" relative inline text-[25px] text-[#6C6E75] left-[280px] top-3 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-5 ">
        {topResData.map((data) => (
          <div key={data.id}>
            <Cart {...data} />
          </div>
        ))}
      </div>
      <hr className="md:mt-10 mt-5 border-[1.5px]" />
    </div>
  );
}

export default OnlineDelivery;

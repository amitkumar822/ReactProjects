import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { catdata } from "../data/CategoryData.jsx";

function Category() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    // if(slide < 15){
    //     setSlide(slide+3)
    // }
    if (slide === 15) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    setSlide(slide - 3);
  };

//   console.log("Length: ", slide);
  // console.log();
  return (
    <div className="max-w-[1126px] mx-auto mt-6">
      <div className="flex my-3 items-center justify-between">
        <div className="md:text-[25px] font-bold ml-3 md:ml-0">What's on your mind?</div>
        <div className="flex">
          <div
            onClick={prevSlide}
            className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7]"
          >
            <FaArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="flex justify-center items-center cursor-pointer w-[30px] h-[30px] rounded-full mx-2 bg-[#e2e2e7]"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {catdata.map((data) => (
          <div
            style={{
            //👉 slide section
              transform: `translateX(-${slide * 100}%)`,
            }}
            className="md:w-[150px] w-[100px] shrink-0 cursor-pointer duration-500"
            key={data.id}
          >
            <img src={data.image} alt="" className=" hover:scale-105 duration-200"/>
          </div>
        ))}
      </div>
      <hr className="md:mt-10 mt-5 border-[1.5px]"/>
    </div>
  );
}
//2h
export default Category;

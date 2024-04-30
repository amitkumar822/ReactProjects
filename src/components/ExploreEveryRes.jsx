import React from "react";
// import TextCard from "./TextCard";

function ExploreEveryRes() {
  const places = [
    {
      place: "Explore Restaurants Near Me"
    },
    {
      place: "Explore Top Rated Restaurants Near Me"
    }
  ]
  return (
    <div className="max-w-[1302px] md:mx-auto mt-12">
      <div className="flex my-3 items-center justify-between">
        <div className="md:text-[25px] text-[14px] font-bold ml-3 md:ml-0">
          Explore Every Restaurants Near Me
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        {
          places.map((data,index) => {
            return(
              <div className="md:w-[619px] ml-4 mr-4 border font-semibold text-center py-4 rounded-lg shadow mb-6 cursor-pointer hover:scale-105 duration-200">
              {data.place}
            </div>
            )
          })
        }
        {/* <div className="w-[619px] border font-semibold text-center py-4 rounded-lg shadow mb-6 cursor-pointer hover:scale-105 duration-200">
          Explore Restaurants Near Me
        </div>
        <div className="w-[619px] border font-semibold text-center py-4 rounded-lg shadow mb-6 cursor-pointer hover:scale-105 duration-200">
          Explore Top Rated Restaurants Near Me
        </div> */}
      </div>
    </div>
  );
}

export default ExploreEveryRes;

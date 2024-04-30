import React from "react";
import TextCard from "./TextCard";

function PlaceToEatAcrossCities() {
    const places = [
        {
            place: "Best Restaurants in Bangalore"
        },
        {
            place: "Best Restaurants in Hyderabad"
        },
        {
            place: "Best Restaurants in Ahmedabad"
        },
        {
            place: "Best Restaurants in Pune"
        },
        {
            place: "Best Restaurants in Kolkata"
        },
        {
            place: "Best Restaurants in Jaipur"
        },
        {
            place: "Best Restaurants in Mumbai"
        },
        {
            place: "Best Restaurants in Chennai"
        },
        {
            place: "Best Restaurants in Nagpur"
        },
        {
            place: "Best Restaurants in Delhi"
        },
        {
            place: "Best Restaurants in Chandigarh"
        },
        {
            place: "Show More"
        }
    ]
  return (
    <div className="max-w-[1302px] md:mx-auto mt-12">
      <div className="flex my-3 items-center justify-between">
        <div className="md:text-[25px] text-[19px] font-bold ml-2">
          Best Places to Eat Across Cities
        </div>
      </div>
      <div className="grid md:grid-cols-4">
        {
            places.map((data,index)=> (
                <div key={index}>
                    <TextCard {...data}/>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default PlaceToEatAcrossCities;

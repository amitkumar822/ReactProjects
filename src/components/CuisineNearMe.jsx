import React from 'react'
import TextCard from './TextCard'

function CuisineNearMe() {
    const places = [
        {
            place: "Chinese Restaurant Near Me"
        },
        {
            place: "Korean Restaurant Near Me"
        },
        {
            place: "Punjabi Restaurant Near Me"
        },
        {
            place: "South Indian Restaurant Near Me"
        },
        {
            place: "Bengali Restaurant Near Me"
        },
        {
            place: "North Indian Restaurant Near Me"
        },
        {
            place: "Italian Restaurant Near Me"
        },
        {
            place: "Indian Restaurant Near Me"
        },
        {
            place: "Seafood Restaurant Near Me"
        },
        {
            place: "Andhra Restaurant Near Me"
        },
        {
            place: "Kerala Restaurant Near Me"
        },
        {
            place: "Show More"
        }
    ]
  return (
    <div className="max-w-[1302px] md:mx-auto mt-12">
      <div className="flex my-3 items-center justify-between">
        <div className="md:text-[25px] text-[19px] ml-2 font-bold">
        Best Cuisines Near Me
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
  )
}

export default CuisineNearMe
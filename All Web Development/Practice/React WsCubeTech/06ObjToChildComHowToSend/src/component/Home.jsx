import React from "react";
import data from "../component/data";

function Home() {
  return (
    <>
      {data.map((item, index) => {
        const { name, username, email } = item;
        const { street, suite, city, zipcode } = item.address;
        const { lat, lng } = item.address.geo;
        const { phone, website } = item;
        const { catchPhrase, bs } = item.company;
        
        return (
          <div
            key={index}
            className=" w-[1170px] mx-auto bg-[#f747e8] rounded m-3 text-center text-[25px]"
          >
            <div className="grid sm:grid-cols-2 grid-cols-1 border-[10px] border-[black] p-[15px] mb-[20px]">
              <h1>{name}</h1>
              <p>{username}</p>
              <p>{email}</p>

              <p>{street}</p>
              <p>{suite}</p>
              <p>{city}</p>
              <p>{zipcode}</p>

              <p>{lat}</p>
              <p>{lng}</p>

              <p>{phone}</p>
              <p>{website}</p>

              <p>{item.company.name}</p>
              <p>{catchPhrase}</p>
              <p>{bs}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Home;

import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function WeatherAPI() {
  let [city, setCity] = useState("");
  let [weatherDeatails, setWeatherDeatails] = useState();
  let [isLoading, setIsLoading] = useState(false)

  let getData = (event) => {
    setIsLoading(true)
    if(city.length==0){//if input not submitted
        //notification alert
        toast.error("Empty data!");
        setWeatherDeatails(undefined)
        setIsLoading(false)
    }else{//if input submitted 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric
            `)
          .then((response) => response.json())
          .then((finalResponse) => {
            if(finalResponse.cod=="404"){
                //notification alert
                toast.error("Your city not match!");
                setWeatherDeatails(undefined)
            }else{
                //notification alert
                toast.success("Successfully city match!");
                setWeatherDeatails(finalResponse)
            }
            setIsLoading(false)
            // console.log(finalResponse);
          });
    }

    // console.log(city);
    setCity("");
   
    event.preventDefault();
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className=" text-[40px] font-bold py-[50px] text-white">
            Simple weather app
          </h1>

          <form onSubmit={getData}>
            <input
              type="text"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              className="w-[300px] h-[40px] pl-3"
              placeholder="Enter your city name"
            />
            <button className="bg-[#67f167] p-[9px] ml-[5px] rounded">
              Submit
            </button>
          </form>

          <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] relative">
                {/*👉 Loading Image  */}
                <img src="https://s41721.pcdn.co/wp-content/uploads/2021/06/loading.gif" className={` w-[100px] absolute left-[40%] ${isLoading ? '' : 'hidden'}`} />

            {weatherDeatails !== undefined ? (
              <>
                <h3 className=" font-bold text-[30px]">
                {weatherDeatails.name} <span className="bg-[yellow]">{weatherDeatails.sys.country}</span>
                </h3> 
                <h3 className=" font-bold text-[40px]">
                    {weatherDeatails.main.temp}
                </h3>
                <img src={`http://openweathermap.org/img/w/${weatherDeatails.weather[0].icon}.png`} alt="" />
                <p>
                    {weatherDeatails.weather[0].description}
                </p>
              </>
            ) : (
              "No Data"
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default WeatherAPI;

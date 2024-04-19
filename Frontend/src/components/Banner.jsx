import React from "react";
import banner from "../../public/banner2.png";

function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row pb-16 textred bg-white text-black dark:bg-slate-900 dark:text-white">
        <div className=" w-full md:w-1/2 mt-12 md:mt-32 md:order-1 order-2">
          <div className=" space-y-12">
            <h1 className=" text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className=" text-pink-500">new everyday!!!</span>
            </h1>

            <p className=" text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              doloremque quas tempora repellat molestiae similique asperiores
              unde blanditiis fugit molestias distinctio eius tenetur, fuga quod
              excepturi iste itaque soluta cupiditate!
            </p>
            {/* Email Box Section */}
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-600 dark:text-white border-[black] bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className=" dark:text-white" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
        </div>
        <div className=" w-full md:w-1/2 md:order-2 order-1">
          {/* <img className="w-[70%] mx-auto md:mt-28 mt-9" src={banner} alt="Banner" /> */}

          <img className="w-[70%] rounded-[20%] mx-auto md:mt-28 mt-9" src="https://img.freepik.com/premium-vector/books-step-education-infographics_41793-550.jpg?w=740" alt="Banner" />
        </div>
      </div>
    </>
  );
}

export default Banner;

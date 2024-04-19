import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form"


function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white bg-white">
        <div  className="w-[600px]">
          <div className=" modal-box shadow-lg shadow-cyan-500/50 dark:bg-slate-900 dark:text-white bg-white text-black">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            <h3 className="font-bold text-lg">Signup</h3>
            {/* Name  */}
            <div className="mt-4 space-y-2">
              <h2>Name</h2>
              <input
                type="text"
                placeholder="Enter your full name"
                className=" w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-600"
                {...register("name", { required: true })} 
              />
              <br />
              {errors.name && (
                <span className=" text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Email  */}
            <div className="mt-4 space-y-2">
              <h2>Email</h2>
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-600"
                {...register("email", { required: true })} 
              />
              <br />
              {errors.email && (
                <span className=" text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password  */}
            <div className="mt-4 space-y-2">
              <h2>Password</h2>
              <input
                type="password"
                placeholder="Enter your password"
                className=" w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-slate-600"
                {...register("password", { required: true })} 
              />
              <br />
              {errors.password && (
                <span className=" text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Button  */}
            <div className="flex justify-around mt-4">
              <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

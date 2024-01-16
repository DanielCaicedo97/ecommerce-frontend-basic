import React from "react";
import { Link } from "react-router-dom";
import ForgotImage from "../../assets/forgot-image.png";
import LockBackground from "../../assets/lock.png";

const ForgotPassword = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center lg:w-2/4 mr-10 md:flex-row ">
        <img
          src={LockBackground}
          alt="login image"
          className="relative w-0 md:w-1/2 lg:w-0 sm:w-0"
        />
        <div>
          <h1 className="font-bold text-6xl uppercase text-center md:w-2/3 mx-auto">
            Recover your account and enjoy the{" "}
            <span className="text-sky-700">products</span>
          </h1>
          <form className="p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md">
            <div className="mb-5">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="block placeholder-slate-400 p-2 w-full bg-slate-100"
                placeholder="e.g., email@email.com"
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="uppercase bg-sky-700 text-white p-2 rounded-md w-full"
            />
            <div className="flex justify-between px-4 mt-5 text-slate-500 ">
              <Link to="/register" className="">
                Don't have an account.
              </Link>
              <Link to="/">Already have an account.</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="h-screen  hidden lg:block lg:w-full">
        <img src={ForgotImage} alt="login image" className="h-full w-screen" />
      </div>
    </div>
  );
};

export default ForgotPassword;

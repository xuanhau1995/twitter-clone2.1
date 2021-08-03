import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, db } from "../firebase";
import { login } from "../features/userSlice";
function SignUp({
  modal,
  onClick,
  email,
  name,
  password,
  setName,
  setEmail,
  setPassword,
  errorName,
  onClose,
}) {
  if (!modal) return null;
  return (
    <>
      <div className="flex justify-center items-center">
        <div
          onClick={onClose}
          className="fixed h-screen z-50 inset-x-0 bottom-0 bg-black bg-opacity-10"
        />
        <div className="w-[360px] sm:w-[400px] md:w-[500px] lg::w-2/6 absolute z-50 bg-white p-8 top-32 rounded-lg">
          <div className="flex justify-center">
            <img
              alt="logo"
              className="h-6 mb-4"
              loading="eager"
              src="https://logonoid.com/images/twitter-logo.png"
            />
          </div>
          <h1 className="text-xl font-bold mb-6">Create Account</h1>
          <form className=" space-y-4">
            <div className="relative">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                placeholder=" "
                className="peer h-14 w-full rounded-md transition ease-in-out duration-500 focus:ring-0 border-gray-400 focus:border-blue-400 hover:border-gray-600 duration-300"
              />
              <label
                htmlFor="name"
                className="peer-placeholder-shown:text-gray-400 text-gray-700 absolute left-3 text-xs top-1 transition-all duration-300  peer-placeholder-shown:text-base peer-placeholder-shown:top-4"
              >
                Display Name
              </label>
            </div>
            {errorName && (
              <p className="text-xs text-red-500 italic font-light">
                {errorName}
              </p>
            )}
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder=" "
                id="email"
                placeholder=" "
                className="peer h-14 w-full rounded-md transition ease-in-out duration-500 focus:ring-0 border-gray-400 focus:border-blue-400 hover:border-gray-600 duration-300"
              />
              <label
                htmlFor="email"
                className="peer-placeholder-shown:text-gray-400 text-gray-700 absolute left-3 text-xs top-1 transition-all duration-300  peer-placeholder-shown:text-base peer-placeholder-shown:top-4"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                id="password"
                placeholder=" "
                className="peer h-14 w-full rounded-md transition ease-in-out duration-500 focus:ring-0 border-gray-400 focus:border-blue-400 hover:border-gray-600 duration-300"
              />
              <label
                htmlFor="password"
                className="peer-placeholder-shown:text-gray-400 text-gray-700 absolute left-3 text-xs top-1 transition-all duration-300  peer-placeholder-shown:text-base peer-placeholder-shown:top-4"
              >
                Password
              </label>
              <label htmlFor="" className="text-gray-500 text-sm">
                Password (6 or more characters)
              </label>
            </div>
          </form>
          <button
            onClick={onClick}
            className="mt-8 h-14 rounded-full w-full justify-center items-center text-white font-semibold bg-blue-400 flex mb-4 hover:bg-blue-500 duration-500"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;

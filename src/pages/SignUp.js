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
        <div className="w-2/6 absolute z-50 bg-white p-8 top-32 rounded-lg">
          <div className="flex justify-center">
            <img
              alt="logo"
              className="h-6 mb-4"
              src="https://logonoid.com/images/twitter-logo.png"
            />
          </div>
          <h1 className="text-xl font-bold mb-6">Create Account</h1>
          <form className=" space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Display Name"
              className="h-11 w-full rounded-md transition ease-in-out duration-500 focus:ring-0 border-gray-400 focus:border-blue-400"
            />
            {errorName && (
              <p className="text-xs text-red-500 italic font-light">
                {errorName}
              </p>
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="h-11 w-full rounded-md transition ease-in-out duration-500 focus:ring-0 border-gray-400 focus:border-blue-400"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="h-11 w-full rounded-md transition ease-in-out duration-500 focus:ring-0 border-gray-400 focus:border-blue-400"
            />
            <label htmlFor="" className="text-gray-500 text-sm">
              Password (6 or more characters)
            </label>
          </form>
          <button
            onClick={onClick}
            className="mt-8 h-11 rounded-full w-full justify-center items-center text-white font-semibold bg-blue-400 flex mb-4 hover:bg-blue-500 duration-500"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;

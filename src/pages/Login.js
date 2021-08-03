import React from "react";

function Login({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  onClick,
}) {
  return (
    <>
      <form className=" space-y-4">
        <div className="relative">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
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
        </div>
      </form>
      <button
        onClick={onClick}
        className="mt-8 h-14 rounded-full w-full justify-center items-center text-white font-semibold bg-blue-400 flex mb-4 hover:bg-blue-500 duration-500"
      >
        Log In
      </button>
    </>
  );
}

export default Login;

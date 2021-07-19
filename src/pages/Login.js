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
      </form>
      <button
        onClick={onClick}
        className="mt-8 h-11 rounded-full w-full justify-center items-center text-white font-semibold bg-blue-400 flex mb-4 hover:bg-blue-500 duration-500"
      >
        Log In
      </button>
    </>
  );
}

export default Login;

import { SparklesIcon } from "@heroicons/react/outline";
import React from "react";

function Header() {
  return (
    <header className="h-12 border-b border-gray-100 flex items-center justify-between p-4 sticky top-0 bg-white z-50">
      <div className="flex space-x-4 items-center">
        <img
          alt="profile"
          className="h-8 w-8 rounded-full border"
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        />
        <h1 className="text-lg font-extrabold">Home</h1>
      </div>

      <SparklesIcon className="h-6 text-blue-400" />
    </header>
  );
}

export default Header;

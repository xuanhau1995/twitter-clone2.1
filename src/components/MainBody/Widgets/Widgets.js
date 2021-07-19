import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import TrendsCard from "./TrendsCard";
import PeopleSuggest from "./PeopleSuggest";
import Topics from "./Topics";

function RightSide() {
  return (
    // style={{ width: "575px" }}
    <div className="w-1/2 hidden lg:flex">
      <div className="space-y-3 min-h-screen">
        <div className="sticky top-0 bg-white h-12 flex items-center z-50">
          <div className="flex w-full h-10 space-x-3 items-center bg-gray-50 px-4 rounded-full group hover:border-blue-300 border border-gray-100 cursor-pointer transition-all duration-500">
            <SearchIcon className="h-4 text-gray-500 group-hover:text-blue-400  duration-500" />
            <input
              type="text"
              placeholder="Search Twitter"
              className=" focus:outline-none bg-transparent text-sm placeholder-gray-500 border-none focus:ring-0"
            />
          </div>
        </div>
        <div className="space-y-4 h-full">
          <TrendsCard />
          <PeopleSuggest />
          <div className="sticky top-16">
            <Topics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;

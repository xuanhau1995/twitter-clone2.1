import { CogIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import React from "react";
import { trends } from "./trends";

function TrendsCard() {
  return (
    <div className="right-side-bg">
      <div className="header-card-trends">
        <h1 className="flex flex-grow text-xl font-bold">Trends For You</h1>
        <div className="h-10 w-10 hover:bg-blue-100 hover:text-blue-400 duration-500 flex justify-center items-center rounded-full pr-2">
          <CogIcon className="h-6 text-blue-400" />
        </div>
      </div>
      <div>
        {trends.map((trend, index) => (
          <div
            key={index}
            className="flex pl-4 py-2 hover:bg-gray-100 duration-500 border-b border-gray-100 cursor-pointer"
          >
            <div className="flex flex-col flex-grow space-y-1">
              <h1 className="text-xs text-gray-400 ">{trend.title}</h1>
              <p className=" font-bold text-sm">{trend.describe}</p>
              <p className="text-xs text-gray-400 ">{trend.follows}</p>
            </div>
            <div className=" mr-1 h-8 w-8 hover:bg-blue-100 hover:text-blue-400 duration-500 flex justify-center items-center rounded-full">
              <DotsHorizontalIcon className="h-4" />
            </div>
          </div>
        ))}
        <button className="p-3 w-full text-sm font-medium text-blue-400 hover:bg-gray-100 rounded-t rounded-2xl duration-500">
          Show More
        </button>
      </div>
    </div>
  );
}

export default TrendsCard;

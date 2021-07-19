import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { topics } from "./DataSuggets";

function Topics() {
  return (
    <>
      <div>
        <div className="right-side-bg ">
          <div className="header-card-trends"> Topics to follow</div>
          {topics.map((topic, i) => (
            <>
              <div
                key={i}
                className="border-b border-gray-100 px-4 py-3 flex items-center space-x-2"
              >
                <div className="flex flex-grow flex-col">
                  <h1 className="text-sm font-bold">{topic.name}</h1>
                  <p className="text-sm text-gray-500">{topic.describe}</p>
                </div>

                <button className="border border-blue-400 text-blue-400 hover:bg-blue-50 rounded-full h-7 text-sm font-semibold px-3 duration-500">
                  Follow
                </button>
                <div>
                  <XIcon className="h-4 text-gray-400" />
                </div>
              </div>
            </>
          ))}
          <button className="p-3 w-full text-sm font-medium text-blue-400 hover:bg-gray-100 rounded-t rounded-2xl duration-500">
            Show More
          </button>
        </div>
        <div className="text-xs space-x-2 space-y-2 mt-4">
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy </a>
          <a href="">Cookie Policy</a>
          <a href="">More...</a>
          <a href="">© 2021 Twitter, Inc.</a>
          <a href="">Twitter clone by La Xuan Hau</a>
        </div>
      </div>
    </>
  );
}

export default Topics;

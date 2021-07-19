import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";
import { userSuggest } from "./DataSuggets";
function PeopleSuggest() {
  return (
    <>
      <div>
        <div className="right-side-bg sticky top-12">
          <div className="header-card-trends">Who to follow</div>
          <div>
            {userSuggest.map((usersuggest, index) => (
              <>
                <div
                  key={index}
                  className="flex items-center border-b border-gray-100 px-4 py-3 space-x-2 hover:bg-gray-100 cursor-pointer duration-500"
                >
                  <img
                    alt="user"
                    src={usersuggest.imagesProfile}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="pt-1 w-full flex-grow">
                    <div className="flex w-full items-center">
                      <p className="text-sm font-bold line-clamp-1">
                        {usersuggest.name}{" "}
                      </p>
                      {usersuggest.certification ? (
                        <BadgeCheckIcon className="h-4 text-blue-400" />
                      ) : null}
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-1">
                      {usersuggest.email}
                    </p>
                  </div>
                  <button
                    className={`border border-blue-400 hover:bg-blue-50 rounded-full h-7 text-sm font-semibold px-3 duration-500 ${
                      (usersuggest.following &&
                        "bg-blue-400 text-white hover:bg-blue-500 ") ||
                      "text-blue-400"
                    }`}
                  >
                    {usersuggest.following ? (
                      <span>Following</span>
                    ) : (
                      <span>Follow</span>
                    )}
                  </button>
                </div>
              </>
            ))}
            <button className="p-3 w-full text-sm font-medium text-blue-400 hover:bg-gray-100 rounded-t rounded-2xl duration-500">
              Show More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PeopleSuggest;

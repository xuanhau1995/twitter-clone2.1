import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
function User({ logoutToApp, displayName, email }) {
  return (
    <div>
      <div
        onClick={logoutToApp}
        className="xl:pr-5 w-full mt-auto absolute bottom-4"
      >
        {/* Web */}
        <div className=" hidden xl:flex items-center px-2 pr-4 w-full hover:bg-blue-50 py-2 rounded-full cursor-pointer">
          <div className="flex lg:flex-grow">
            <img
              className="h-10 w-10 rounded-full border "
              loading="eager"
              alt=""
              src="https://res.cloudinary.com/lxhdev/image/upload/v1627745273/small_1606582662438_55e386e84c.jpg"
            />

            <div className="pl-2 xl:flex flex-col flex-grow hidden">
              <h1 className="text-sm font-semibold ">{displayName}</h1>
              <p className="text-sm text-gray-500 line-clamp-1 lowercase whitespace-normal">
                @{displayName}78665
              </p>
            </div>
          </div>
          <div>
            <DotsHorizontalIcon className="h-5 hidden xl:flex" />
          </div>
        </div>
        {/* Mobel */}
        <div className="flex xl:hidden justify-center cursor-pointer">
          <img
            className="h-10 w-10 rounded-full border "
            loading="eager"
            alt=""
            src="https://res.cloudinary.com/lxhdev/image/upload/v1627745273/small_1606582662438_55e386e84c.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default User;

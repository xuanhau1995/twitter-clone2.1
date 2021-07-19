import React from "react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
function User({ logoutToApp, displayName, email }) {
  return (
    <div>
      <div
        onClick={logoutToApp}
        className="xl:pr-5 w-full mt-auto absolute bottom-4"
      >
        <div className="flex items-center px-2 pr-4 w-full hover:bg-blue-50 py-2 rounded-full cursor-pointer">
          <div className="flex flex-grow">
            <img
              className="h-10 w-10 rounded-full border "
              src="https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/213684244_1932209123622709_7165151028738961550_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=utPGcbhzS6IAX_gt3Gj&_nc_ht=scontent.fhan3-2.fna&oh=70fdcd3354988dfb6968c797b05013aa&oe=60F29795"
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
        <div></div>
      </div>
    </div>
  );
}

export default User;

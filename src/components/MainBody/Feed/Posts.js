import React from "react";
import { BadgeCheckIcon, SwitchHorizontalIcon } from "@heroicons/react/solid";
import { ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline";
import Reaction from "./Reaction";
function Posts({
  displayName,
  email,
  verified,
  timeStamp,
  message,
  postImage,
  avatar,
  countTweet,
  countComent,
  countLike,
}) {
  return (
    <div>
      <div className="bg-white border-t border-b border-gray-100 p-4 hover:bg-gray-50 cursor-pointer duration-500">
        <div className="flex">
          <img
            alt="profile"
            src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            className="h-11 w-11 rounded-full"
          />
          <div className=" flex flex-col pl-2">
            <div className="flex flex-row items-center space-x-1">
              <h1 className="font-semibold text-sm flex items-center whitespace-nowrap">
                {displayName} <BadgeCheckIcon className="h-4 text-blue-400" />
              </h1>
              <p className="text-gray-500 text-sm line-clamp-1 w-auto">
                {email}
              </p>
              <i className="text-gray-500">•</i>
              <p className="text-gray-500 text-sm line-clamp-1">
                {new Date(timeStamp?.toDate()).toLocaleString()}
              </p>
            </div>
            <div className="py-1">
              <p className="text-sm leading-1 text-gray-700 mr-4">{message}</p>
              {postImage && (
                <div className="py-2">
                  <img
                    alt="images-tweet"
                    src={postImage}
                    className={`rounded-2xl ${postImage && "border"}`}
                  />
                </div>
              )}
            </div>
            <div className="flex space-x-2 sm:space-x-4 lg:space-x-20">
              <Reaction
                Icon={ChatIcon}
                countComent={countComent}
                commentColor={true}
              />
              <Reaction
                Icon={SwitchHorizontalIcon}
                countTweet={countTweet}
                tweetColor={true}
              />
              <Reaction
                Icon={HeartIcon}
                countLike={countLike}
                likeColor={true}
              />
              <Reaction Icon={UploadIcon} uploadColor={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;

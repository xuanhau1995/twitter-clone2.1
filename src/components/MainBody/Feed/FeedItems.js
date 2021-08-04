import { BadgeCheckIcon, SwitchHorizontalIcon } from "@heroicons/react/solid";
import { ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline";
import React from "react";
import Reaction from "./Reaction";
function FeedItems({
  name,
  certification,
  imagesProfile,
  email,
  timeStamp,
  content,
  imagesTweet,
  countComent,
  countTweet,
  countLike,
}) {
  return (
    <div className="bg-white border-t border-b border-gray-100 p-4 hover:bg-gray-50 cursor-pointer duration-500">
      <div className="flex">
        <img
          alt="profile"
          src={imagesProfile}
          className="h-11 w-11 rounded-full"
        />
        <div className=" flex flex-col pl-2">
          <div className="flex flex-row items-center space-x-1">
            <h1 className="font-semibold text-sm flex items-center whitespace-nowrap">
              {name} <BadgeCheckIcon className="h-4 text-blue-400" />
            </h1>
            <p className="text-gray-500 text-sm line-clamp-1 w-auto">{email}</p>
            <i className="text-gray-500">•</i>
            <p className="text-gray-500 text-sm line-clamp-1">{timeStamp}</p>
          </div>
          <div className="py-1">
            <p className="text-sm leading-1 text-gray-700 mr-4">{content}</p>
            {imagesTweet && (
              <div className="py-2 w-full">
                <img
                  alt="images-tweet"
                  src={imagesTweet}
                  className={`rounded-2xl ${imagesTweet && "border"}`}
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
            <Reaction Icon={HeartIcon} countLike={countLike} likeColor={true} />
            <Reaction Icon={UploadIcon} uploadColor={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedItems;

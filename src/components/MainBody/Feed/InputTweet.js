import {
  ClockIcon,
  EmojiHappyIcon,
  GiftIcon,
  PhotographIcon,
  PlusIcon,
  TagIcon,
  XIcon,
} from "@heroicons/react/outline";
import { GlobeIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import ChosseOption from "./ChosseOption";

function InputTweet({
  filepickerRef,
  src,
  tweetImage,
  setTweetImage,
  tweetMessage,
  setTweetMessage,
  onClick,
  addImageToPost,
  removeImage,
}) {
  return (
    <>
      <div className="px-4 py-2 bg-white border-b border-gray-100 hidden sm:flex w-full">
        <div className="flex space-x-2 flex-grow">
          <img
            alt="profile"
            loading="eager"
            className="h-11 w-11 border border-gray-100 rounded-full opacity-75 hover:opacity-100 cursor-pointer transition-all duration-500"
            src="https://res.cloudinary.com/lxhdev/image/upload/v1627745273/small_1606582662438_55e386e84c.jpg"
          />
          <div className="w-full pl-2">
            <input
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
              placeholder="What's happening?"
              className="w-full focus:outline-none py-2 text-xl placeholder-gray-500"
            />
            {/* Place to paste image */}
            {tweetImage && (
              <>
                <div className="rounded-lg overflow-hidden h-72 relative">
                  <img
                    src={src}
                    alt=""
                    className="absolute h-full w-full inset-0"
                  />
                  <div
                    onClick={removeImage}
                    className="flex h-8 w-8 rounded-full bg-black bg-opacity-20 absolute justify-center items-center cursor-pointer group hover:bg-white duration-700 right-2 top-2"
                  >
                    <XIcon className="h-5  text-white group-hover:text-red-400" />
                  </div>
                </div>
              </>
            )}
            {/* End */}
            <div className="hover:bg-blue-100 cursor-pointer duration-500 text-blue-400 rounded-full  space-x-2 inline-flex  items-center px-2 py-1 mt-2 ml-3">
              <GlobeIcon className="h-4" />
              <h1 className="text-xs font-bold">Everyone can reply</h1>
            </div>
            <hr className=" border-gray-100 my-2" />
            <div className="flex items-center justify-between">
              {/* Upload Image to post */}
              <div className="flex space-x-1">
                <label
                  htmlFor="uploadImage"
                  value={tweetImage}
                  onChange={(e) => setTweetImage(e.target.value)}
                >
                  <ChosseOption Icon={PhotographIcon} />
                  <input
                    accept="image/png, image/jpg, image/jpeg"
                    type="file"
                    id="uploadImage"
                    ref={filepickerRef}
                    onChange={addImageToPost}
                    hidden
                  />
                </label>
                {/* End Post */}
                <ChosseOption Icon={GiftIcon} />
                <ChosseOption Icon={EmojiHappyIcon} />
                <ChosseOption Icon={TagIcon} />
                <ChosseOption Icon={ClockIcon} />
              </div>
              <button
                onClick={onClick}
                type="submit"
                className="bg-blue-400 h-10 rounded-full px-4 text-white hover:bg-blue-500 duration-500  cursor-pointer"
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="h-14 w-14 bg-blue-400 rounded-full fixed bottom-16 right-4 flex sm:hidden justify-center items-center shadow-2xl ">
        <PlusIcon className="h-5 text-white" />
      </button>
    </>
  );
}

export default InputTweet;

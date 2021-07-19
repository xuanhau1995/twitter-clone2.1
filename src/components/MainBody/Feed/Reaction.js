import React from "react";

function Reaction({
  countComent,
  countTweet,
  countLike,
  Icon,
  uploadColor,
  likeColor,
  tweetColor,
  commentColor,
}) {
  return (
    <div className="flex items-center group space-x-1">
      <div
        className={`h-8 w-8 rounded-full flex justify-center items-center transition-all duration-500 ${
          commentColor && "group-hover:bg-blue-100"
        } ${tweetColor && "group-hover:bg-green-100"} ${
          likeColor && "group-hover:bg-pink-100"
        } ${uploadColor && "group-hover:bg-blue-100"}`}
      >
        {Icon && (
          <Icon
            className={`h-4 text-gray-500 transition-all duration-500 ${
              commentColor && "group-hover:text-blue-400"
            } ${tweetColor && "group-hover:text-green-400"} ${
              likeColor && "group-hover:text-pink-400"
            } ${uploadColor && "group-hover:text-blue-400"}`}
          />
        )}
      </div>

      <p
        className={`text-xs font-light text-gray-500 transition-all duration-500 ${
          commentColor && "group-hover:text-blue-400"
        } ${tweetColor && "group-hover:text-green-400"} ${
          likeColor && "group-hover:text-pink-400"
        } ${uploadColor && "group-hover:text-blue-400"}`}
      >
        {countComent || countLike || countTweet}
      </p>
    </div>
  );
}

export default Reaction;

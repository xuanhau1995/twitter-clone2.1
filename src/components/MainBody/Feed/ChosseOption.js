import React from "react";

function ChosseOption({ Icon }) {
  return (
    <div className="h-9 w-9 flex justify-center items-center hover:bg-blue-50 rounded-full text-blue-400 cursor-pointer duration-500">
      {Icon && <Icon className="h-5" />}
    </div>
  );
}

export default ChosseOption;

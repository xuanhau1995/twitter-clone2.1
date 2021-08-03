import { PlusIcon } from "@heroicons/react/outline";
import React from "react";

function NavItem({ title, Icon, active }) {
  return (
    <div className="w-full group cursor-pointer">
      <div className="xl:px-2 h-12 space-x-3 flex xl:justify-end justify-center rounded-full xl:inline-flex items-center group-hover:bg-blue-50 transition duration-500">
        {Icon && (
          <Icon
            className={`h-7  group-hover:text-blue-400 ${
              active ? "text-blue-400" : "text-gray-500"
            }`}
          />
        )}
        <h1
          className={`text-lg font-semibold group-hover:text-blue-400 hidden xl:flex ${
            active && "text-blue-400"
          }`}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default NavItem;

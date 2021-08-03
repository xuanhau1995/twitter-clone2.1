import React from "react";
import { Nav } from "./_Nav";
import NavItem from "./NavItem";
import { HomeIcon } from "@heroicons/react/solid";
import User from "./User";
import {
  AnnotationIcon,
  BellIcon,
  BookmarkIcon,
  ChatIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function Navbar() {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();

  const logoutToApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <>
      <div className="flex-grow 2xl:justify-end min-h-screen hidden sm:flex">
        <nav className="xl:pl-8 py-2 border-r border-gray-100 flex flex-col min-h-screen sm:w-36 md:w-36 lg:w-24 2xl:ml-48 xl:w-72">
          <div className="sticky top-0 min-h-screen">
            <div className="flex justify-center xl:justify-start 2xl:justify-start">
              <div className="h-10 w-10 rounded-full flex justify-center items-center hover:bg-blue-50 cursor-pointer transition duration-500 ">
                <img
                  alt="logo"
                  className="h-5"
                  src="https://logonoid.com/images/twitter-logo.png"
                />
              </div>
            </div>
            <nav className="space-y-2 mt-2 xl:pr-4">
              <NavItem title="Home" Icon={HomeIcon} active={true} />
              <NavItem title="Expore" Icon={HashtagIcon} />
              <NavItem title="Notifiction" Icon={BellIcon} />
              <NavItem title="Messages" Icon={AnnotationIcon} />
              <NavItem title="Bookmarks" Icon={BookmarkIcon} />
              <NavItem title="Lists" Icon={CollectionIcon} />
              <NavItem title="Profile" Icon={UserIcon} />
              <NavItem title="More" Icon={DotsCircleHorizontalIcon} />
            </nav>
            <div className="mt-3 xl:pr-7 flex justify-center">
              <button className="h-14 w-14 xl:h-11 xl:w-full md:w-14 md:h-14  font-semibold bg-blue-400 flex justify-center items-center text-white rounded-full  hover:bg-blue-500 transition duration-500">
                <PlusIcon className="h-5 text-white flex xl:hidden" />
                <p className="hidden xl:flex">Tweet</p>
              </button>
            </div>
            {/* user Avatar */}
            <User
              displayName={user.displayName}
              email={user.email}
              logoutToApp={logoutToApp}
            />
            {/* end */}
          </div>
        </nav>
      </div>
      {/* Nav show when mobile Device */}
      <div className="h-14 bg-white border-t border-gray-100 fixed bottom-0 z-50 right-0 left-0 flex justify-around items-center sm:hidden">
        <HomeIcon className="h-7 text-blue-400" />
        <SearchIcon className="h-7 text-gray-500" />
        <BellIcon className="h-7 text-gray-500" />
        <ChatIcon className="h-7 text-gray-500" />
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FeedSession from "./components/MainBody/Feed/FeedSession";
import SlideBar from "./components/SlideBar/SlideBar";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import Widgets from "./components/MainBody/Widgets/Widgets";

function TheLayout() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="flex justify-between">
      <SlideBar />
      <div className="min-h-screen flex-grow">
        <div className=" min-h-screen flex space-x-2 2xl:w-4/5">
          <FeedSession />
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default TheLayout;

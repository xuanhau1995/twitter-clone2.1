import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { login } from "../features/userSlice";
import { Route, useHistory } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

function LogIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const dispatch = useDispatch();
  const historty = useHistory();
  const [modal, setModal] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };
  const loginToApp = (e) => {
    e.preventDefault();
    if (!email) {
      return setErrorEmail("Pls input email");
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return setErrorName("Please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            // photoURL: profliePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                // photoUrl: profliePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <SignUp
        modal={modal}
        name={name}
        email={email}
        password={password}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        errorName={errorName}
        onClick={register}
        onClose={toggleModal}
      />
      <div className="grid grid-cols-12 relative">
        <div className="col-span-7">
          <img
            className="object-cover h-full"
            src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          />
        </div>
        <div className="col-span-5 p-8">
          <div className="h-full flex items-center">
            <div>
              <div>
                <img
                  alt="logo"
                  className="h-10 mb-8"
                  src="https://logonoid.com/images/twitter-logo.png"
                />
                <h1 className="text-6xl font-bold mb-10">Happening now</h1>
                <p className="text-3xl font-bold pb-8 tracking-wider">
                  Join Twitter Today.
                </p>
              </div>
              <form className="w-4/5 pt-8">
                <>
                  <Login
                    onClick={loginToApp}
                    setErrorEmail={setErrorEmail}
                    email={email}
                    name={name}
                    setName={setName}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                  />
                  <div className="flex space-x-2 justify-center">
                    <p className="link text-blue-400">Forgot password?</p>
                    <p className="text-blue-400">•</p>
                    <p onClick={toggleModal} className="link text-blue-400">
                      Sign up for Twitter
                    </p>
                  </div>
                </>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;

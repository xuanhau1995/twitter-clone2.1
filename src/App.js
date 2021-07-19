import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "./pages/Landing";
import TheLayout from "./TheLayout";
import { selectUser } from "./features/userSlice";
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            // photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return <>{!user ? <LogIn /> : <TheLayout />}</>;
}

export default App;

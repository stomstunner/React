import React from "react";
// so logout ke liye ham kuch chize import karwani hofi jaisse
// logout ke bass we need dispatch and logout services
// and we need dispatch ki hamko kuch bejna bhi parega authservice ko
import { useDispatch } from "react-redux";

// and hamra logout jo hai woh auth service ke adner hi hai toh usko bhi lana parega

import authservice from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  // we dispatch something so we make a dispatch
  const dispatch = useDispatch();

  // and hamra jo logout button hoga uspe click kane se kuch hoga toh uske liye ham handleLogoutbtn bana lenge
  
  // const logoutHandler = async () => {
  //   // we use the authService ka logout jo ki dega hame ek promise ki mai session ko delete kar dunga
  //   await authservice.logout.then(() => {
  //     dispatch(logout());
  //     // dispatch karane se hamamra store hamesha updated rehega
  //   });
  // };

  const logoutHandler = async () => {
    try {
        await authservice.logout();
        dispatch(logout());
    } catch (error) {
        console.log(error);
    }
};

  return (
    <button
      onClick={logoutHandler}
      className="
    group relative overflow-hidden px-6 py-2.5 rounded-xl
    bg-gradient-to-r from-violet-600 to-indigo-600
    text-white font-semibold transition-all duration-300
    hover:scale-105
  "
    >
      <span
        className="
      absolute inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/40
      to-transparent
      group-hover:translate-x-full
      transition-transform
      duration-700
    "
      ></span>

      <span className="relative z-10">Logout</span>
    </button>
  );
}

export default LogoutBtn;

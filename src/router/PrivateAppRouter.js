import React from "react";
import Login from "../pages/login/Login";
import Navbar from "../components/navbar/Navbar";

const PrivateRouter = ({ children, ...rest }) => {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth ? (
    <>
      <Navbar />
      {children}
    </>
  ) : (
    <Login />
  );
};

export default PrivateRouter;
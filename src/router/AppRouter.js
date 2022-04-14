import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
import Navbar from "../components/navbar/Navbar";
import React, { useState, useEffect } from "react";

const AppRouter = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuth(true) : setAuth(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", auth);
  }, [auth]);

  return (
    <BrowserRouter>
    <Navbar logout={() => setAuth(false)} />
      <Routes>
        {auth && (
          <>
            <Route
              path="/home"
              element={
                
                  <Home />
              }
            />
            <Route
              path="/about"
              element={
                
                  <About />
               
              }
            />
            <Route
              path="home/details/:mealName"
              element={
                
                  <Details />
               
              }
            />
          </>
        )}

        {!auth && (
          <Route
            path="/"
            element={<Login authenticate={() => setAuth(true)} />}
          />
        )}

        <Route path="*" element={<Navigate to={auth ? "/home" : "/"} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

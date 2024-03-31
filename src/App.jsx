import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [login, setLogin] = useState({});
  return (
    <BrowserRouter>
      <>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Zoom}
        />
        <Routes>
          <Route
            path="/"
            element={
              login && login._id ? (
                <Home login={login} setLogin={setLogin} />
              ) : (
                <Login setLogin={setLogin} />
              )
            }
          />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;

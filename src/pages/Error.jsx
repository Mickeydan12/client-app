import React from "react";
import errorImg from "../assets/errorDog2.jpeg";
import "../Styles/Error.css";
const Error = () => {
  return (
    <>
      <main className="d-flex align-items-center justify-content-center text-center main-error container" > 
        <div>
          <h1>404</h1>
          <img src={errorImg} alt="" className="errorImg" />
          <h1>Page Not Found</h1>
        </div>
      </main>
    </>
  );
};

export default Error;

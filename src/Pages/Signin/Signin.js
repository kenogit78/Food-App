import React from "react";
import loginPicture from "../../Component/Images/loginPicture.svg";
import Button from "../../Component/Button";
import './sass/Signin.css'

const Signin = () => {
  return (
    <div className="login">
      <div>
        <img src={loginPicture} alt="loginpicture" />
      </div>
      <div>
        <h2>Welcome Back!</h2>
        <form>
          <input className="inputtag" type="email" placeholder="Your Email address" /> <br />
          <span className="passwordTag">
            <input className="inputtag2" type="password" placeholder="Your Password" />
            <button className="btnShow">show</button>
          </span>{" "}
          <br />
          <Button props={"LOGIN"} />
        </form>
      </div>
    </div>
  );
};

export default Signin;

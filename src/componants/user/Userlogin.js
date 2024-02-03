import React from "react";
import "./css/userlogin.css";

const userlogin = () => {
  return (
  <div className="flex justify-center items-center h-screen ">
      <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="login">
        <form className="form">
          <label for="chk" aria-hidden="true">
            Log in
          </label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Log in</button>
        </form>
      </div>

      <div className="register">
        <form className="form">
          <label for="chk" aria-hidden="true">
            Register
          </label>
          <input
            className="input"
            type="text"
            name="txt"
            placeholder="Username"
            required=""
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required=""
          />
          <input
            className="input"
            type="password"
            name="pswd"
            placeholder="Password"
            required=""
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default userlogin;

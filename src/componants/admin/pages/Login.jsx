import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { adminLoginHandler } from "../../../store/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.auth.admin);
  useEffect(() => {
    console.log();

    if (Object.keys(admin).length > 0) {
      navigate("/admin");
    }
  }, [admin, navigate]);

  const dispatch = useDispatch();
  const onLoginHandler = (e) => {
    e.preventDefault();
    const userLoginDetails = {
      email: e.target.email.value,
      password: e.target.pswd.value,
    };
    dispatch(adminLoginHandler(userLoginDetails));
  };
  return (
    <motion.div
      className="flex justify-center items-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form" onSubmit={onLoginHandler}>
            <label htmlFor="chk" aria-hidden="true">
              Admin Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button className="cursor-pointer">Log in</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;

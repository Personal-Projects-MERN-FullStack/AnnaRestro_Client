import "./css/userlogin.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginHandler, SignupHandler } from "../../store/actions/auth-actions";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const Userlogin = () => {
  const auth = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/menu");
    }
  }, [auth,navigate]);

  const dispatch = useDispatch();
  const onRegsiterHandler = (e) => {
    e.preventDefault();
    const userRegisterDetails = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.pswd.value,
    };
    dispatch(SignupHandler(userRegisterDetails));
  };
  const onLoginHandler = (e) => {
    e.preventDefault();
    const userLoginDetails = {
      email: e.target.email.value,
      password: e.target.pswd.value,
    };

    dispatch(LoginHandler(userLoginDetails));
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form" onSubmit={onLoginHandler}>
            <label for="chk" aria-hidden="true">
              Log in
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
            <button>Log in</button>
          </form>
        </div>

        <div className="register">
          <form className="form" onSubmit={onRegsiterHandler}>
            <label for="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              required
            />
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
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;

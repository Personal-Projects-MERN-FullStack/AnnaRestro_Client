import { auth } from "../handlers/auth-handler";
import { ui } from "../handlers/Ui-handler";

export const LoginHandler = (logindata) => {
  return async (dispatch) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      dispatch(
        ui.SetNotification({
          active: true,
          msg: responseData.error,
        })
      );
    } else {
      localStorage.setItem("user", JSON.stringify(responseData));
      dispatch(
        ui.SetNotification({ active: true, msg: "Logged in Successfullyyyyyy" })
      );
      dispatch(auth.Login());
    }
  };
};
export const SignupHandler = (signupdata) => {
  return async (dispatch) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/Register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupdata),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      dispatch(ui.SetNotification({ active: true, msg: responseData.error }));
    } else {
      dispatch(
        ui.SetNotification({ active: true, msg: "Logged in Successfully " })
      );
      localStorage.setItem("user", JSON.stringify(responseData));
      dispatch(auth.Login());
    }
  };
};

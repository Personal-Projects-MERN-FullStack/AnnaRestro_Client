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
      dispatch(auth.setuser(responseData));
      localStorage.setItem("user", JSON.stringify(responseData));
      dispatch(
        ui.SetNotification({ active: true, msg: "Logged in Successfullyyyyyy" })
      );
      dispatch(auth.Login());
    }
  };
};
export const adminLoginHandler = (logindata) => {
  return async (dispatch) => {
    console.log(logindata);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/admin/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      }
    );
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      dispatch(
        ui.SetNotification({
          active: true,
          msg: responseData.error,
        })
      );
    } else {
      dispatch(auth.setadminuser(responseData));
      dispatch(
        ui.SetNotification({ active: true, msg: "Logged in Successfullyyyyyy" })
      );
    }
  };
};
export const sadminLoginHandler = (logindata) => {
  return async (dispatch) => {
 
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/sadmin/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logindata),
      }
    );
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      dispatch(
        ui.SetNotification({
          active: true,
          msg: responseData.error,
        })
      );
    } else {
      dispatch(auth.setsadminuser(responseData));
      dispatch(
        ui.SetNotification({ active: true, msg: "Logged in Successfullyyyyyy" })
      );
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
      dispatch(auth.setuser(responseData));
      localStorage.setItem("user", JSON.stringify(responseData));
      dispatch(
        ui.SetNotification({ active: true, msg: "Logged in Successfully " })
      );

      dispatch(auth.Login());
    }
  };
};
export const adminlogout = () => {
  return async (dispatch) => {
    dispatch(auth.adminLogout());
  };
};
export const sadminlogout = () => {
  return async (dispatch) => {
    dispatch(auth.sadminLogout());
  };
};

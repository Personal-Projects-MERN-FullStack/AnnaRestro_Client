import { ui } from "../handlers/Ui-handler";
import { auth } from "../handlers/auth-handler";

export const authVefication = (curl) => {
  return async (dispatch) => {
    const user = localStorage.getItem("user");
    const userdata = JSON.parse(user);
    if (user) {
      dispatch(auth.Login());
      dispatch(auth.setuser(userdata));
    } else {
      dispatch(auth.Logout());
    }
  };
};

export const LogoutHandler = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(auth.Logout());
  };
};

export const Currentpagehandler = () => {
  return async (dispatch) => {
    const currentUrl = window.location.href;
    localStorage.setItem("lastpage", currentUrl);
    dispatch(ui.SetCurrentPage(currentUrl));
  };
};
export const Clearbasket=()=>{
  return async (dispatch)=>{
    dispatch(ui.Clearbasket())
  }
}
export const LastPageUpdater = (auth) => {
  return async (dispatch) => {
    const user = localStorage.getItem("lastpage");
    if (user) {
      dispatch(ui.SetCurrentPage(user));
      if (auth) {
      }
    } else {
    }
  };
};

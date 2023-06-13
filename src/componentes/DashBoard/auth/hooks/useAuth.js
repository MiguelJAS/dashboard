import { useReducer } from "react";
import loginReducer from "../reducers/loginReducer";
import Swal from "sweetalert2";
import loginUser from "../services/authService";

const useAuth = () => {
  //Como getItem nos devuelve un String hacemos un parse para convertirlo en objeto
  const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
    isAuth: false,
    user: undefined,
  };

  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  function handlerLogin({ username, password }) {
    const isLogin = loginUser({ username, password });
    if (isLogin) {
      const user = { username: "admin" };
      dispatch({
        type: "login",
        payload: user,
      });

      //Como setItem maneja solo string tenemos que convertir el JSON utilizando stringify
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user: user,
        })
      );
    } else {
      Swal.fire("Error Login", "Username o password invalidos", "error");
    }
  }

  const handlerLogOut = () => {
    dispatch({
      type: "logout",
    });
    sessionStorage.removeItem("login");
  };

  return { login, handlerLogOut, handlerLogin };
};

export default useAuth;

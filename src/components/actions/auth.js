import { types } from "../../types/types";

const login = (user) => ({
    type: types.login,
    payload: user,
  });

export const startLogout = () => {
    return async (dispatch) => {
      // debugger;
      localStorage.removeItem("token");
      dispatch(
        login({
         id:null,
        email:null,
        rol:null
        })
      );
    };
}
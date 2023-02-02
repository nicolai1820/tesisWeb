import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const login = (email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken('/api/auth/login', { "email": email, "password": password }, 'POST');
        const body = await resp.json();
        console.log(body);
        console.log("validando fetch");

        if (resp.ok) {
            localStorage.setItem('token', body.token);

            dispatch({
                type: types.login,
                payload: {
                    uid: body.usuario.id,
                    name: body.usuario.email,
                    rol: body.usuario.id_rol
                }
            })
        } else {
            console.log(body.errors);
            Swal.fire('Error', body.errors[0], 'error');
        }
    }

}


export const renewToken = () => {
    return async (dispatch) => {
        debugger;

        const resp = await fetchConToken('/api/auth/renew');
        const body = await resp.json();
        if (resp.ok) {
            console.log(body);
            localStorage.setItem('token', body.token);

            dispatch({
                type: types.login,
                payload: {
                    uid: body.user.id,
                    name: body.user.email,
                    rol: body.user.id_rol,
                }
            })
        } else {
        }
    }
}


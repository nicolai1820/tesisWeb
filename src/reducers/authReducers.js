import { types } from "../types/types";

const intialState = {
    checking: true,
}

export const authReducers = (state = intialState, action) => {

    switch (action.type) {
        
        case types.login:
            return {
                id: action.payload.uid,
                email: action.payload.name,
                rol: action.payload.rol,
            }
        case types.logout:
            return { }



        default:
            return state;
    }


}
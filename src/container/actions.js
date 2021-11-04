import * as actionType from "./types";
import * as AuthService from "../components/services/auth.service";

//register action
export const registerAction = (payload)=> (dispatch)=>{
    AuthService.register(payload)
        .then(response =>{
            dispatch({
                type: actionType.REGISTER_SUCCESS,
                payload: response.data
            })
            return Promise.resolve(response.data);
        })
        .catch(error =>{
            dispatch({
                type: actionType.REGISTER_FAIL,
                payload: {err: error.message || "Registration Failed"}
            })
            return Promise.reject(error);
        })
}
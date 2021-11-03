import * as actionType from "./types";

//register action
export const registerAction = (payload)=>{
    return{
        type: actionType.REGISTER_SUCCESS,
        payload
    }
}
import * as actionType from "./types";
const initialState={isLoggedIn: false, user:null}
// reducer
export default function rootReducer(state=initialState, action){
    const {type, payload} = action;
    
    switch(type){
        case actionType.REGISTER_SUCCESS:
            return{
                ...state,
                isLoggedIn: false
            }
        default:
            return state;
    }
}
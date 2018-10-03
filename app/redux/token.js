import axios from 'axios';
import {setToken,clearToken} from '../utils/request/token';

/** declear all actions */
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const LOG_ERROR = 'LOG_ERROR';

/** init state */
const initState = {
    token : ''
};

/** expport object */
export function token (state = initState,action) {
    switch(action.type) {
        case LOG_IN:
            const {token} = action.payload;
            setToken(token);
            return {...state,token};
        case LOG_ERROR:
            return {...state};
        case LOG_OUT:
            clearToken();
            return {...initState};
        default:
            return state;
    }
}

export function login ({mobile,password},callBack) {
    return async dispatch => {
        const res = await axios.post("token/user",{mobile,password,is_third:''},{adapter: (config)=>callBack(config)});

        // console.log(res);
        (res.error_code === 0) ?
            dispatch({type:LOG_IN,payload:res.data}):
            dispatch({type:type.NORMAL,payload:res});
        // console.log(res.data.msg);
    }
}

export function logout () {
    return async dispatch => {
        await axios.delete("token/");

        dispatch({type:LOG_OUT});
    }
}
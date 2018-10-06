import axios from 'axios';
import {setToken,clearToken} from '../utils/request/token';

/** declear all actions */
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
/** init state */
const initState = {
    token : '',
    msg : ''
};

/** expport object */
export function token (state = initState,action) {
    switch(action.type) {
        case LOG_IN:
            const {token,msg} = action.payload;
            setToken(token);
            return {...state,token,msg};
        case LOG_OUT:
            clearToken();
            return {...initState};
        default:
            return state;
    }
}

export function login ({mobile,password}) {
    return async dispatch => {
        const res = await axios.post("token/user",{mobile,password,is_third:''});

        // console.log(res);
        if (res.error_code === 0) {
            const msg = res.msg;
            const {token} = res.data

            dispatch({type:LOG_IN,payload:{msg,token}});
        }
        // console.log(res.data.msg);
    }
}

export function logout () {
    return async dispatch => {
        await axios.delete("token/");

        dispatch({type:LOG_OUT});
    }
}
import axios from 'axios';

/** declear all actions */
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const LOAD_DATA = 'LOAD_DATA';

/** init state */
const initState = {
    name : ''
};

/** expport object */
export function user (state = initState,action) {
    switch(action.type) {
        case LOG_IN:
            return {...state};
        case LOG_OUT:
            return {...initState};
        default:
            return state;
    }
}

export function login (mobile,password) {
    return async dispatch => {
        const res = await axios.post("token/user",{mobile,password,is_third:''});

        dispatch({type:LOG_IN,payload:res.data.data});

        // console.log(res.data.msg);
    }
}

export function info () {
    return async dispatch => {
        const res = await axios.get('user/self');

        // console.log(res);

        dispatch({type:LOAD_DATA,payload:res.data})
    }
}

export function logout () {
    return async dispatch => {
        await axios.delete("token/");

        dispatch({type:LOG_OUT});
    }
}
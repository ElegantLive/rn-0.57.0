import {setToken,clearToken} from '../utils/request/token';

/** declear all actions */
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

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
        case LOG_OUT:
            clearToken();
            return {...initState};
        default:
            return state;
    }
}
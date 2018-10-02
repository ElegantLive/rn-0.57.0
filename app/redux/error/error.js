/** declear all actions */
import type from './errorType';

/** init state */
const initState = {
    msg : 'OK',
    error_code : 0,
    data : {},
    request_url : null
};

/** expport object */
export function error (state = initState,action) {
    switch(action.type) {
        case type.NORMAL:
            console.log(action);
            return {...state,...action.payload};
        default:
            return state;
    }
}
/** deal function */
function designObject(newName) {
    return {type:RENAME,payload:{name:newName}};
}

/** export action */
export function normal (data){
    return {type: type.NORMAL, payload: data}
}

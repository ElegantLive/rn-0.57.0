import axios from 'axios';

/** declear all actions */
const LOAD_DATA = 'LOAD_DATA';
const RENAME = 'RENAME';
const FIND_PWD = 'FIND_PWD';

/** init state */
const initState = {
    name : ''
};

/** expport object */
export function user (state = initState,action) {
    switch(action.type) {
        case LOAD_DATA:
            return {...state,...action.payload};
        case RENAME:
            return {...state,...action.payload};
        default:
            return state;
    }
}

export function info () {
    return async dispatch => {
        const res = await axios.get('user/self');

        if (res) dispatch({type:LOAD_DATA,payload:{name:res.data.name}});
    }
}

/** deal function */
function designObject(newName) {
    return {type:RENAME,payload:{name:newName}};
}

/** export action */
export function reName (newname){
    return {type: RENAME, payload: newname}
}

export function initName (newName) {
    return dispatch=>{
        setTimeout(() => {
            dispatch(designObject(newName));
        }, 2000);
    }
}
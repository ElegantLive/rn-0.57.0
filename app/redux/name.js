/** declear all actions */
const RENAME = 'RENAME';

/** init state */
const initState = {
    name : 'piaopiao'
};

/** expport object */
export function name (state = initState,action) {
    switch(action.type) {
        case RENAME:
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
export function rename (newname){
    return {type: RENAME, payload: newname}
}

export function initName (newName) {
    return dispatch=>{
        setTimeout(() => {
            dispatch(designObject(newName));
        }, 2000);
    }
}
import axios from 'axios';
import { setToken, clearToken } from '../utils/storage/token';

/** declear all actions */
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
/** init state */
const initState = {
	token: null,
	auth: false
};

/** expport object */
export function token (state = initState, action) {
	switch(action.type) {
	case LOG_IN:
		const {token} = action.payload;
		setToken(token);
		return {...state, ...action.payload};
	case LOG_OUT:
		clearToken();
		return {...initState};
	default:
		return state;
	}
}

export function login ({mobile, password}) {
	return async dispatch => {
		const res = await axios.post('token/user', {mobile, password, is_third: ''});

		if (res.error_code === 0) {
			// console.log(res);
			const {token} = res.data;
			const auth = true;

			dispatch({type: LOG_IN, payload: {token, auth}});
		}
		// console.log(res.data.msg);
	};
}

export function logout () {
	return async dispatch => {
		await axios.delete('token/');

		dispatch({type: LOG_OUT});
	};
}
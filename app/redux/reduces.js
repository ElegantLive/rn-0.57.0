import {combineReducers} from 'redux';
// import {name} from './name';
import {user} from './user';
import {token} from './token';
import {error} from './error/error';

export default combineReducers({user,token,error});
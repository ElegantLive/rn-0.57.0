import { set, get, remove } from './storage';

const key = 'token';

const getToken = () => {
    return get(key);
}

const clearToken = () => {
    remove(key);
}

const setToken = (value) => {
    set(key,value);
}

export {
    setToken,
    clearToken,
    getToken
}
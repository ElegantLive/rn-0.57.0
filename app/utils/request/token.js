import { AsyncStorage } from 'react-native';

const key = 'token';

const getToken = () => {
    return AsyncStorage.getItem(key);
}

const clearToken = () => {
    AsyncStorage.removeItem(key);
}

const setToken = (value) => {
    AsyncStorage.setItem(key,value);
}

export {
    setToken,
    clearToken,
    getToken
}
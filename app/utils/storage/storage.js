import { AsyncStorage } from 'react-native';

const get = (key) => {
    return AsyncStorage.getItem(key);
}

const remove = (key) => {
    AsyncStorage.removeItem(key);
}

const set = (key,value) => {
    AsyncStorage.setItem(key,value);
}

export {
    set,
    remove,
    get
}
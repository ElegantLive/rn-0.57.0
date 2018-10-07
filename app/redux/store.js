import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import reducers from './reduces';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

/** 自定义logger中间件 */
// const logger = store => next => action => {
//     if (typeof action === 'function') console.log('dispatching a function');
//     else console.log('dispatching', action);
//     let result = next(action);
//     console.log('next state', store.getState());
//     return result;
// }

const persistConfig = {
    key : 'root',
    storage:AsyncStorage
}

const perisistedReducer = persistReducer(persistConfig,reducers);

const logger = createLogger();

const middlewares = [
    logger,
    thunk
];

// export default store = createStore(reducers, compose(applyMiddleware(...middlewares)))
export const store = createStore(
    perisistedReducer,
    undefined,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export const persistor = persistStore(store);
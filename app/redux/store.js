import { applyMiddleware, createStore,compose,composeEnhancers } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import { AsyncStorage } from 'react-native';
import reducers from './reduces';
// import storage from 'redux-persist/lib/storage';

const logger = store => next => action => {
	if(typeof action === 'function') console.log('dispatching a function');
	else console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

let middlewares = [
	logger,
	thunk
];

export default store = createStore(reducers,compose(applyMiddleware(...middlewares)))
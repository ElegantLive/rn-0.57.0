import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import Root from './screen/root';
import { PersistGate } from 'redux-persist/integration/react';
import './utils/request/axios';

export default class App extends Component {
    render (){
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Root />
                </PersistGate>
            </Provider>
        )
    }
}
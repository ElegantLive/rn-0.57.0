import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import RootRouter from './screen/root';
import { PersistGate } from 'redux-persist/integration/react';
import './utils/request/axios';
import {Theme} from 'teaset';

Theme.set({fitIPhoneX: true});

export default class App extends Component {
    render (){
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RootRouter />
                </PersistGate>
            </Provider>
        )
    }
}
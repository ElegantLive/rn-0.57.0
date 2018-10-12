import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import RootRouter from './screen/root';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationService from './utils/navigation/service';
import FlashMessage from 'react-native-flash-message';
import './utils/request/axios';
import './utils/validate/validate';

export default class App extends Component {
    render (){
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                        <RootRouter
                            ref = {navigationRef => {
                                NavigationService.setTopLevelNavigator(navigationRef)
                            }}
                        />
                        <FlashMessage position="top" />
                </PersistGate>
            </Provider>
        )
    }
}
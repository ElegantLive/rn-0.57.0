import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import {Root} from 'native-base';
import RootRouter from './screen/root';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationService from './utils/navigation/service';
import './utils/request/axios';

export default class App extends Component {
    render (){
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Root>
                        <RootRouter
                            ref = {navigationRef => {
                                NavigationService.setTopLevelNavigator(navigationRef)
                            }}
                        />
                    </Root>
                </PersistGate>
            </Provider>
        )
    }
}
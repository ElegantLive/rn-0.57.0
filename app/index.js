import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import RootRouter from './screen/root';
import { PersistGate } from 'redux-persist/integration/react';
import './utils/request/axios';
import {Theme} from 'teaset';
// import { createStackNavigator } from 'react-navigation';
import NavigationService from './utils/navigation/service';

/** teaset适配iPhone X */
Theme.set({fitIPhoneX: true});

// const TopLevelNavigator = createStackNavigator({RootRouter});
// TopLevelNavigator.navigationOptions = {header:null};

export default class App extends Component {
    render (){
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    {/* <TopLevelNavigator
                        ref = {navigationRef => {
                            NavigationService.setTopLevelNavigator(navigationRef)
                        }}
                    /> */}
                    <RootRouter 
                        ref = {navigationRef => {
                            NavigationService.setTopLevelNavigator(navigationRef)
                        }}
                    />
                </PersistGate>
            </Provider>
        )
    }
}
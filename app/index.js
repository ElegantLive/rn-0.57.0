import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Root from './route/root';

export default class App extends Component {
    render (){
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        )
    }
}
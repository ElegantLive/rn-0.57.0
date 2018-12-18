/** @format */
import {AppRegistry, YellowBox} from 'react-native';
// import App from './App';
import './app/utils/system/global';
import App from './app/index';  
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Require cycle:']);

AppRegistry.registerComponent(appName, () =>  App);
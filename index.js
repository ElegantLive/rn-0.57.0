/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from "./index.ios";
import App from './app/index';  
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

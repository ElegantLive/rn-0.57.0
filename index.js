/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from "./index.ios";
import "./app/utils/system/global";
import './app/utils/system/themeSet';
import App from './app/index';  
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

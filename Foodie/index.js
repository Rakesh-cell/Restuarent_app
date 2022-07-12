/**
 * @format
 */
import 'react-native-gesture-handler'

import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';
// import fontsCSS from "@native-base/icons/FontsCSS";
// const style = document.createElement("style");
// style.type = "text/css";
// style.appendChild(document.createTextNode(fontsCSS));
// document.head.appendChild(style); 
const APP_NAME = 'Foodie';
AppRegistry.registerComponent(APP_NAME, () => App);

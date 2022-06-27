/**
 * author {Rakesh}
 * params{ Login credentials}
 * 
 */
 import 'react-native-gesture-handler'

import React,{useEffect} from 'react';
// 1. import `NativeBaseProvider` component
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native'
import { NativeBaseProvider } from 'native-base';

import RootNavigation from './src/Navigation/RootNavigation'
import {Provider} from 'react-redux'
import { store } from './src/redux/store';



export default function App() {
  useEffect(() => {
        SplashScreen.hide();
      },[])


  return (
      <Provider store={store}>
      <SafeAreaView style={{ flex: 1}}> 
  <NativeBaseProvider> 

    <RootNavigation/>
  </NativeBaseProvider>

    </SafeAreaView>
    </Provider>
  )
}

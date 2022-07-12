/**
 * @author {Rakesh }
 * @param {store}
 * @description {This is application is for Restuarent application and locate stores on maps and user login contains a single user }
 * created this using boilerplate template
 */

import React, { useEffect } from 'react';
// 1. import `NativeBaseProvider` component
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native'
import { NativeBaseProvider } from 'native-base';

import RootNavigation from './src/Navigation/RootNavigation'
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import { enableLatestRenderer } from 'react-native-maps';




export default function App() {
  enableLatestRenderer();

  useEffect(() => {
    SplashScreen.hide();
  }, [])


  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NativeBaseProvider>

          <RootNavigation />
        </NativeBaseProvider>

      </SafeAreaView>
    </Provider>
  )
}

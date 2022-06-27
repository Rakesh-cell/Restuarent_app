import React from 'react'
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

import DrawerNavig from './DrawerNavig';
import StackNavigation from './StackNavigation';




const RootNavigation = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StackNavigation/>
    {/* <DrawerNavig/> */}
    </NavigationContainer>
  )
}

export default RootNavigation
import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../modules/auth/Login';
import Signup from '../modules/auth/Signup';
import { HomeScreen } from './MainTabScreen';
import NotificationsScreen from '../NotificationsScreen';
import DrawerNavig from './DrawerNavig';
import TabAScreen from '../modules/Home/TabAScreen'
import TabBScreen from '../modules/Home/TabBScreen';
import { Init } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();


const StackNavigation = () => {
  const token = useSelector(state => state.Reducers.authToken);
  // console.log(token);
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()
  const init = async () => {
    await dispatch(Init());
    setloading(false);
  }
  useEffect(() => {
    init();
  }, [token])
  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
  return (
    <Stack.Navigator>
      {
        token === null ? <>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </> : <>
          <Stack.Screen name="HomeScreen" component={DrawerNavig} options={{ headerShown: false }} />

          <Stack.Screen name="Notifications" component={NotificationsScreen} />
        </>
      }




    </Stack.Navigator>
  )
}

export default StackNavigation
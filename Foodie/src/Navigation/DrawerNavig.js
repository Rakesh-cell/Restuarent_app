import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './MainTabScreen';
import NotificationsScreen from '../NotificationsScreen';
import {View,SafeAreaView} from 'react-native'
import {DrawerContent} from './DrawerContent'
import Login from '../modules/auth/Login'
import Signup from '../modules/auth/Signup'

const Drawer = createDrawerNavigator();


const DrawerNavig = ({navigation}) => {
  return (
    // <View style={{ flex: 1,}}>
    <Drawer.Navigator  drawerContent={(props)=><DrawerContent {...props}/>} initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        {/* <Drawer.Screen name="Login" component={Login} options={{headerShown:false}} /> */}
        {/* <Drawer.Screen name="Signup" component={Signup} options={{headerShown:false}} /> */}


      </Drawer.Navigator>
      // </View>
  )
}

export default DrawerNavig
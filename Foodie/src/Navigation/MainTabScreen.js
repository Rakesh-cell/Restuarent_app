import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import TabBScreen from '../modules/Home/TabBScreen';
import TabAScreen from '../modules/Home/TabAScreen';
const Tab = createMaterialBottomTabNavigator();

export function HomeScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'TabA') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      } else if (route.name === 'TabB') {
        iconName = focused
        ? 'cube'
        : 'cube-outline';
      }
return <Ionicons name={iconName} size={size} color={color}  initialRouteName="TabA"   />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="TabA" component={TabAScreen} options={{tabBarLabel: 'Feed'}}/>
        <Tab.Screen name="TabB" component={TabBScreen} options={{tabBarLabel: 'Locate'}}/>
    </Tab.Navigator>
  );
}
import React from 'react'
import {View,Text,Button} from 'react-native'
/**
 * @options this is a optioanl screen and is hidden beacuse user don't want this as per requirement
 * @param {null} param0 
 * @returns 
 */

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>No New Notifications!</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
  )
}

export default NotificationsScreen
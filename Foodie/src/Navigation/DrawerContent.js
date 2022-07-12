import React, { useEffect } from 'react'
import { View, StyleSheet, Alert, Text,ScrollView } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Icons from 'react-native-vector-icons/Ionicons';

import { Avatar,Divider } from "native-base";
import { HomeScreen } from './MainTabScreen';
import NotificationsScreen from '../NotificationsScreen';
import {Logout} from '../redux/actions'
import { useDispatch } from 'react-redux';
export function DrawerContent(props) {







    // useEffect(() => {



    // },[])
    const dispatch =useDispatch()

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView

                {...props}>

                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>

                            <Avatar bg="indigo.500" alignSelf="center" size="md" source={{
                                uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>
                                RS
                            </Avatar>

                            <View style={{ marginLeft: 15, flexDirection: 'column' }} >
                                <Text style={styles.title}>User Name</Text>
                                <Text style={styles.caption}>no-reply@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    {/* <Divider my="1" /> */}
                    <ScrollView style={styles.drawerSection}>
                        
                        <DrawerItem
                            icon={({ size})=>(
                                <Icon name='home'
                                color="#1E90FF"
                                size={size}
                                />
                            )}
                            label='Home'
                            onPress={()=>{props.navigation.closeDrawer();}}
                        
                        />
                        
                        <DrawerItem
                            icon={({ size})=>(
                                <Icon name='account'
                                color="#1E90FF"
                                size={size}
                                />
                            )}
                            label='Notifications'
                            onPress={()=>{props.navigation.navigate('Notifications')}}
                        
                        />
                        {/* <DrawerItem
                            icon={({ size})=>(
                                <Icon name='view-list'
                                color="#1E90FF"
                                size={size}
                                />
                            )}
                            label='All Products'
                            onPress={()=>{props.navigation.navigate('All Products')}}
                        
                        /> */}
</ScrollView>
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ size }) => (
                        <Icon name='exit-to-app'
                            color="#1E90FF"
                            size={size}
                        />
                    )}
                    label='Sign out'
                    onPress={() => {
                        Alert.alert(
                            "Foodie",
                            "Do you want to logout",
                            [
                                {
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                {
                                    text: "Yes", onPress: () => dispatch(Logout())
                                }
                            ]
                        );

                    }}
                />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },//
    userInfoSection: {
        paddingLeft: 20,
    },//
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },//
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },//

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },//
    drawerSection: {
        marginTop: 15,
      },

});
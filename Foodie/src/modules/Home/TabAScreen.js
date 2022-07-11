import React,{useEffect,useState,useCallback} from 'react';
import {View,ScrollView, Text,FlatList,Platform} from 'react-native'
import Card from '../../components/Card';
import {useDispatch} from 'react-redux'
import { Fetchdata } from '../../redux/actions';


import realm ,{ getAlldata,deleteAlldata } from '../../redux/realmdb';



  const TabAScreen = ({navigation}) => {
    const dispatch =useDispatch()
    const [res,setres]= useState(getAlldata())//to store data 

      useEffect(() => {
        if(res.length>4){
          deleteAlldata()
        dispatch(Fetchdata())

        }
        // setres(getAlldata())
      },[])
      Platform.OS === 'android'?console.log("android",getAlldata()):null

      
 
    const ItemSeparatorView = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#f8C8C6',
            color:'#080707'
          }}
        />
      );
    };
    

console.log('res', res.length)
    return (
        <View style={{ flex: 1}}>
        <FlatList
        data={res}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item,index)=>index}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={({item}) => {
          // console.log("inside flat ",item);
          return (

                  <Card item={item}/>

          );
        }}
      
        />
        
        {/* <Card/> */}
      </View>
    )
  }
  
  export default TabAScreen;
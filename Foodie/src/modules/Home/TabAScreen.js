import React,{useEffect,useState} from 'react';
import {View,ScrollView, Text,FlatList} from 'react-native'
import Card from '../../components/Card';
import {useDispatch} from 'react-redux'
import { Fetchdata } from '../../redux/actions';
// import Realm from "realm";
// import {Restuarent ,Images} from '../../redux/realmdb'
import realm ,{ getAlldata } from '../../redux/realmdb';

// import realm from '../../redux/realmdb'

  const TabAScreen = ({navigation}) => {
    const dispatch =useDispatch()
    const [res,setres]= useState(getAlldata())//to store data 

    useEffect(() =>{
      dispatch(Fetchdata())
      // console.log("inside use effect");
    // quickStart()

    },[])

    // async function quickStart() {
    //   // console.log("inside quickstart");
    //   const realm = await Realm.open({
      
    //     schema: [Restuarent,Images],
    //   });

    //   const res_data= realm.objects("Restuarent")
    // console.log('res_data', res_data)
    // setres(res_data);
    
    // }
    // let results=realm.objects('Restuarent');
    // console.log("REsults",JSON.stringify(results));

    // Realm.close();

console.log('res', res.length)
    return (
        <View style={{ flex: 1}}>
        {/* <Text style={{textAlign: 'center', marginTop: 300}}>
          Welcome to TabA page!
        </Text> */}
        <FlatList
        data={res}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item,index)=>index}
        renderItem={({item}) => {
          // console.log("inside flat ",item);
          return (
            <View >
              {/* {data.map((item)=>( */}
                  <Card item={item}/>
                  {/* // ))} */}
            </View>
          );
        }}
      
        />
        
        {/* <Card/> */}
      </View>
    )
  }
  
  export default TabAScreen;
import React, { useEffect, useState, useCallback } from 'react';
import { View, ScrollView, Text, FlatList, Platform ,StyleSheet} from 'react-native'
import Card from '../../components/Card';
import { useDispatch } from 'react-redux'
import { Fetchdata } from '../../redux/actions';


import realm, { getAlldata, deleteAlldata } from '../../redux/realmdb';



const TabAScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [res, setres] = useState(getAlldata())//to store data 
  const [refresh,setrefresh] = useState(false)

  useEffect(() => {
    // if(res.length>4){
    // deleteAlldata()
    dispatch(Fetchdata())

    // }
    // setres(getAlldata())
  }, [])

  const EmptyListMessage = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.emptyListStyle}
      >
        No Data Found, Refresh Again
      </Text>
    );
  };


  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#f8C8C6',
          color: '#080707'
        }}
      />
    );
  };
  const endComponent = () => {
    return (
      <View>
        <Text style={styles.emptyListStyle}> List ended</Text>
      </View>
    );
  };
  const onRefresh = async () => {
    setrefresh(true);
    await getAlldata();
    setrefresh(false);
  };
 

  console.log('res', res.length)
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={res}
        onRefresh={onRefresh}
        refreshing={refresh}
        ItemSeparatorComponent={ItemSeparatorView}
        ListEmptyComponent={EmptyListMessage}
        ListFooterComponent={endComponent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          // console.log("inside flat ",item);
          return (

            <Card item={item} />

          );
        }}

      />


    </View>
  )
}

export default TabAScreen;

const styles = StyleSheet.create({
  emptyListStyle: {
    padding: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});
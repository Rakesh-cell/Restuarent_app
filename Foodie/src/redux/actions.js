import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native'
import axios from 'axios'
// import Realm, { UpdateMode } from "realm";
import {Restuarent,Images} from './realmdb'
import realm from "./realmdb";
import { downloaddata } from "./realmdb";

export const Init = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('token');
        if (token !== null) {
            console.log('token fetched');
            dispatch({
                type: 'LOGIN',
                payload: token,
            })
        }

    }
}

export const Loginuser = (mail, password) => {
    return async dispatch => {
        let token = null;
        try {
            if (mail === 'Testuser@gmail.com' && password == '12341234') {
                token = mail + password;
                // here we can use login api to get token and then store it
                await AsyncStorage.setItem('token', token);
                console.log('token stored');
            }
            else {
                Alert.alert("Invalid user", "mail:Testuser@gmail.com password: 12341234")

            }
        }
        catch (err) {
            // Alert.alert("Invalid user", "mail:Testuser@gmail.com password: 12341234")
            console.log(err);
        }
        dispatch({
            type: 'LOGIN',
            payload: token,
        })
    }
}



export const Logout = () => {
    return async dispatch => {
        await AsyncStorage.clear();
        dispatch({
            type: 'LOGOUT'
        })
    }
}

// export const Fetchdata=() => {
//     return async dispatch => {
//        await axios.get("http://205.134.254.135/~mobile/interview/public/api/restaurants_list")
//        .then(response => {
//         //    console.log('response.data', response.data.data)
//            Realm.open({
//                schema:[Restuarent,Images],
//            }).then(realm=>{
//                realm.write(()=>{

//                    response.data.data.forEach(obj=>{
//                     //    console.log("obj",obj);
//                        realm.create("Restuarent",{
//                            id: obj.id,
//                            title: obj.title,
//                            address: obj.address,
//                            latitude: obj.latitude,
//                            longitude: obj.longitude,
//                            rating: obj.rating,
//                            total_review: obj.total_review,
//                            description: obj.description,
//                            mobile: obj.mobile,
//                            images: obj.images,
                        
//                        },"modified");
                       
//                    })
//                })
//         //    console.log("d1",d1);
//                try{
//         const res_data= realm.objects("Restuarent")
//         console.log(res_data);
//                }catch(e){
//                    console.log("e",e);
//                }

//            })

//         //   Realm.close();

        
//         //   console.log(res);
//        }).then(() => {
//             console.log("stored data into database");
//        }).catch(err => {
//            console.log(err);
//        })
//     }
// }

export const Fetchdata=() => {
    return async dispatch => {
       await axios.get("http://205.134.254.135/~mobile/interview/public/api/restaurants_list")
       .then(response => {
        //    console.log('response.data', response.data.data)

                      downloaddata(response.data.data)
        

       }).catch(err => {
           console.log(err);
       })
    }
}
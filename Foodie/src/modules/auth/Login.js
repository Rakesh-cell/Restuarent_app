/**
 * @params {email,password}
 * @description Login page 
 */


 import React,{useState} from 'react'
 import Inputfield from '../../components/Inputfield'
 import {ScrollView,View ,StyleSheet,Text,TouchableOpacity,ActivityIndicator} from 'react-native'


 import { Alert } from "react-native";
import {Loginuser} from '../../redux/actions'
import {useDispatch} from 'react-redux'
 
  const Login=({navigation})=> {

 
     const [email, setEmail] = useState('')
     const [msgerr, setmsgErr] = useState()
 
     const [password, setPassword] = useState('')
     const [passerr,setpasserr] = useState()
 
const dispatch =useDispatch();
 
     const handlelogin=() => {
     
         let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         if (!pattern.test(String(email).toLowerCase())) {
             Alert.alert("Email","Invalid email")
         }
         else if (password.length < 8) {
             Alert.alert("Password","Password must be atleast 8 chars")
         }
         else{
            dispatch(Loginuser(email, password))
        // navigation.navigate('Home')
         setEmail('')
         setPassword('')
         //error 
         }
 
     }
     return (
         <ScrollView contentContainerStyle={{ flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor:'Rice'}}>

             <Text style={styles.img}>FOODIE</Text>
 
             <View style={styles.inputContainer}>  
             <Inputfield 
                 name="email" 
                 Lefticon="mail" 
                 msgerr={msgerr} 
                 value={email} 
                 Label="Email"
                 onChangeText={(email) => {
                     const check = email
                     
                     let regix = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                     setEmail(email)
                     if (!check) {
                         setmsgErr("enter your email Id")    
                         
                     }
                     else if (!regix.test(String(check).toLowerCase())) {
                         setmsgErr("email is not valid")
                         
                     }
                     else {
                         // mailvalid = true
                         setmsgErr(null)
                         
                     }
                     
 
                 }}
 
             
             />
 
         </View>
         <View style={styles.inputContainer}>  
         <Inputfield 
                  Label="Password"
                  name='passward'
                  Lefticon='lock-closed'
                  ricon="eye-off"
                  value={password}
                  secureTextEntry
                  msgerr={passerr}
                  onChangeText={(password) => {
                      const temp = password
                      setPassword(password)
                      if (!temp) {
                          setpasserr("password is a Mandatory")
                      }
                      else if (String(temp).length < 8) {
                          setpasserr("passward should have atleast 8 characters length")
                      }
                      else {
                          
                          setpasserr(null)
                      }
                  }}
                  />
         </View>
         <TouchableOpacity  style={styles.pstyle} onPress={()=>{Alert.alert("forgot password ","screen to be created")}} >
             <Text style={styles.ptext}>Forgot Password?</Text>   
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn} onPress={()=> {handlelogin()}}>
             <Text style={styles.btntext} >Login</Text>   
         </TouchableOpacity>
         <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                 <Text style={ {color: 'black' }}>Don't have a Account? </Text>
                 <Text style={styles.ptext} onPress={() => navigation.navigate('Signup')}> Sign Up </Text>
         </View>
         {/* </>)} */}
         
                  
     </ScrollView>
     )
 }
 
 export default Login
 
 
 const styles = StyleSheet.create({
     
     inputContainer:{
         flexDirection:'row',
         marginBottom:5,
         alignItems:'center',
         marginHorizontal:15,
        
     },
     img:{
         fontSize:40,
         fontWeight: 'bold',
        //  fontFamily: 'Luminari, fantasy',
         color: 'red',
         marginBottom:20,
     },
     //btn StyleS
     btn:{
         width: '90%',
         height: 50,
         borderColor:'blue',
         backgroundColor: '#0148a4',
        // bordrRadius:10,//error
         marginVertical:20,
         borderWidth:0,
     },
     btntext:{
         fontSize:23,
         fontWeight:'bold',
         color:'white',
         alignSelf: 'center',
         marginVertical:10,
     },
     fpassword: {
         alignSelf: 'flex-end',
         color:'#000000'
     },
     ptext:{
         
          color:'blue'
     },
     pstyle:{
         alignSelf: 'flex-end',
          marginVertical: 10,
          marginRight:20,
     }
 })
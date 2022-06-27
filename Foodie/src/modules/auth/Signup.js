import React,{useState} from 'react'
import Inputfield from '../../components/Inputfield'
import {ScrollView,View ,StyleSheet,Text,TouchableOpacity} from 'react-native'



import { Alert } from "react-native";



// import { signInUser } from '../../redux/action';

 const Signup = ({navigation}) => {


    const [email, setEmail] = useState('')
    const [msgerr, setmsgErr] = useState()

    const [fname,setfname]=useState('')
    const[ferr,setferr] = useState()

    const [lname,setlname]=useState('')
    const[lerr,setlerr] = useState()

    const[pno,setpno]= useState('')
    const[perr,setperr]=useState()

    const [password, setPassword] = useState('')
    const [passerr,setpasserr] = useState()

    const [confirm,setconfirm] = useState('')
    const [cerr,setcerr] = useState()//to check the confirm passward




    const handlesignup=() => {

        
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (fname.length < 1) {
            Alert.alert("First Name","First Name is required")
        } else if (lname.length < 1) {
            Alert.alert("Last Name","Last name is required")
        } else if (pno.length < 10) {
            Alert.alert("Phone","Phone number is required")
        } else if (!Rvalue) {
            Alert.alert("Gender is required")
        }
        else if (!pattern.test(String(email).toLowerCase())) {
            Alert.alert("Email","Invalid email")
        }
        else if (password.length < 8) {
            Alert.alert("Password","Password must be atleast 8 chars")
        } else if (confirm != password) {
            Alert.alert("Password","Password must match")
        } 
        else{
navigation.navigate("Login")
            setEmail('')
        setfname('')
        setPassword('')
        setlname('')
        setpno('')
        setconfirm('')


        }
      

    }

  

   

    
    return (
        //contentContainerStyle={{ flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor:'#FAF0DD'}}
        <ScrollView style={{flex: 1,}} >
            <View style={{alignItems:'center',justifyContent: 'center',}}>

             <Text style={styles.img}>FOODIE</Text>
            <View style={styles.inputContainer}>  
            <Inputfield 
                name="First Name" 
                Lefticon="person" 
                msgerr={ferr} 
                value={fname} 
                Label="First Name"
                onChangeText={(fname) => {
                    const temp = fname
                     setfname(fname)
                     if (!temp) {
                         setferr("Name is Required")
                     }
                     else if (String(temp).length < 3) {
                         setferr("Name should contain atleast 3 char")
                     }
                     else {
                         setferr(null)
                     }
                }}
            />

             </View>
        <View style={styles.inputContainer}>  
            <Inputfield 
                name="Last Name" 
                Lefticon="person" 
                msgerr={lerr} 
                value={lname} 
                Label="Last Name"
                onChangeText={(lname) => {
                    const temp = lname
                     setlname(lname)
                     if (!temp) {
                         setlerr(" Last Name is Required")
                     }
                     else if (String(temp).length < 1) {
                        setlerr("Name should contain atleast 1 char")
                    }
                     else {
                         setlerr(null)
                     }
                }}    
            />

        </View>
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
                        setmsgErr(null)
                    }
                }}

            
            />

        </View>
        <View style={styles.inputContainer}>  
            <Inputfield 
                name="phone" 
                Lefticon="call" 
                msgerr={perr} 
                value={pno} 
                Label="Phone Number"
                onChangeText={(pno) => {
                    const check = pno
                    let regix = /^[9]+[0-9]{9}$/
                    setpno(pno)
                    if (!check) {
                        setperr("enter your contact Number")
                    }
                    else if (!regix.test(String(check))) {
                        setperr("Number must start with 9 and length of 10")
                    }
                    else {
                        setperr(null)
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
        <View style={styles.inputContainer}>  
        <Inputfield 
                 Label=" Confirm Password"
                 name='passward'
                 Lefticon='lock-closed'
                 ricon="eye-off"
                 value={confirm}
                 secureTextEntry
                 msgerr={cerr}
                 onChangeText={(confirm) => {
                     const temp = confirm
                     setconfirm(confirm)
                     if (!temp) {
                         setcerr("password is a Mandatory")
                     }
                     else if (String(temp)!=password) {
                         setcerr("passwards must match")
                     }
                     else {
                         setcerr(null)
                     }
                 }}
                 />
        </View>

        <TouchableOpacity style={styles.btn} onPress={()=>  {handlesignup()}}>
            <Text style={styles.btntext} >Create Account</Text>   
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginBottom:10}}>
                <Text style={ {color: 'black' }}>Already have an account? </Text>
                <Text style={ {color: 'blue' }} onPress={() => navigation.navigate('Login')}> Login </Text>
        </View>
        </View>
        </ScrollView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    head:{
        fontSize: 15,
        padding: 4,
    },
    
    img:{
        fontSize:30,
        fontWeight: 'bold',
        // fontFamily: 'Luminari, fantasy',
        color: 'red',
        marginBottom:20,
        marginTop:30,
    },
    inputContainer:{
    
            flexDirection:'row',
            marginBottom:5,
            alignItems:'center',
            marginHorizontal:15,   
    },
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
})
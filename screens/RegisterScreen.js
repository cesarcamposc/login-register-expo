import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

import FacebokSVG from '../assets/images/facebook.svg'
import GoogleSVG from '../assets/images/google.svg'
import LoginSVG from '../assets/images/login.svg'
import React from 'react'
import TwitterSVG from '../assets/images/twitter.svg'

const RegisterScreen = () => {
  return (
    <SafeAreaView style = {styles.containerSafe}>
      <ScrollView>      
        <View style = {styles.viewContainer}>
            <View style = {styles.viewHeader}>
                <LoginSVG height = {300} width = {300} style = {styles.loginSvg}/>
                <Text style = {styles.textRegister}>REGISTER</Text>
            </View>
            
            <View style = {styles.containerSocials}>
                <TouchableOpacity style = {styles.buttonsSocials}>
                    <GoogleSVG height = {25} width={25}/>                    
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonsSocials}>
                    <FacebokSVG height = {25} width={25}/>                    
                </TouchableOpacity>

                <TouchableOpacity style = {styles.buttonsSocials}>
                    <TwitterSVG height = {25} width={25}/>                    
                </TouchableOpacity>             
            </View>
            
            <Text style = {{textAlign: 'center', color: 'grey', marginBottom:30}}>Or, Register with Email ...........</Text> 
            
            <View style = {styles.containerInput}>
                <MaterialIcons name='alternate-email' size={20} color='purple' style = {{marginRight: 8}}/>
                <TextInput placeholder='Email ID' keyboardType='email-address' style = {styles.textInput}/>
            </View>

            <View style = {styles.containerInput}>
                <MaterialIcons name='person' size={20} color='purple' style = {{marginRight: 8}}/>
                <TextInput placeholder='Full Name' keyboardType='email-address' style = {styles.textInput}/>
            </View>

            <View style = {styles.containerInput}>
                <MaterialIcons name='lock' size={20} color='purple' style = {{marginRight: 8}}/>
                <TextInput placeholder='Password' secureTextEntry={true} style = {styles.textInput}/>
            </View>

            <View style = {styles.containerInput}>
                <MaterialIcons name='lock' size={20} color='purple' style = {{marginRight: 8}}/>
                <TextInput placeholder='Confirm Password' secureTextEntry={true} style = {styles.textInput}/>
            </View>

            <View style = {styles.containerInput}>
                <AntDesign name='calendar' size={20} color='purple' style = {{marginRight: 8}}/>
                <TextInput placeholder='Date of Birth' secureTextEntry={true} style = {styles.textInput}/>
            </View>

            <TouchableOpacity style = {styles.buttonLogin}>
                <Text style = {styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>

            <Text style = {styles.textWithLogin}>Or, Login with ....</Text>
            
            <View style = {styles.containerLogin}>
                <Text>Already Registered?</Text>
                <TouchableOpacity onPress={{}}>
                    <Text style = {styles.textLogin}>  Login</Text>
                </TouchableOpacity>                
            </View>

        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  containerSafe: {         
      justifyContent: 'center',
  },
  
  viewContainer: {
      paddingHorizontal: 25,
  },

  viewHeader: {
      alignItems: 'center',        
  },

  loginSvg: {
      transform: [{rotate: '-5deg'}]
  },

  textRegister: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 30,
      color: 'purple'
  },
  
  containerInput: {
      flexDirection: 'row',
      borderBottomColor: "purple",
      borderBottomWidth: 2,
      marginBottom: 30,
      paddingBottom: 10,        
  },

  buttonLogin: {
      backgroundColor: 'purple',
      padding: 20,
      borderRadius: 10,
      marginBottom:30,
  },
  
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
  },
  
  containerSocials: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 30,
  },
  
 buttonsSocials: {
  borderColor: 'gray',
  borderWidth: 3,
  borderRadius:10,
  paddingHorizontal: 30,
  paddingVertical: 10,
  },

  textWithLogin: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 30,
  },

  containerLogin: {
    flexDirection: 'row',
    justifyContent:'center',
    marginBottom: 30,
},

textLogin:{
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 15,
} 
  
})
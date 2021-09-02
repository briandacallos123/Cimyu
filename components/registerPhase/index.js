import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'

// components
import Aside from '../loginPhase/aside'
import Header from '../loginPhase/header'
import Footer from '../loginPhase/footer'
import Form from './registrationForm'

export default function Register(){
   return(
    <TouchableWithoutFeedback onPress={()=>{
        Keyboard.dismiss()
    }}>
         <View style={myStyle.container}>
    {/* container top */}
        <View style={myStyle.motherContent}>
            {/* left container */}
            <View style={myStyle.mainContent}>
                {/* aside */}
                <Aside style={myStyle.try}/>
                {/* main form */}
                <View style={myStyle.mainForm}>
                    <Header/>
                    <Form />
                </View>
                {/* aside */}
            <View style={myStyle.aside}>
                    <Aside/>
                </View>
            </View> 
        </View>
        {/* container bottom */}
        <View>
            <Footer/>
        </View>
</View> 
    </TouchableWithoutFeedback>
   )
}

const myStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#02215A',
        paddingHorizontal:20
    },
    motherContent:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },  
    mainContent:{
        flexDirection:'row',
    },
    aside:{
        justifyContent:'flex-end'
    },
    textInput:{
        marginTop:20,
        backgroundColor:'black'
    },
    try:{
       
    },
    mainForm:{
        flex:1
    }
})

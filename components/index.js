import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput,} from 'react-native'

// components
import Login from './loginPhase/index'
import Register from './registerPhase/index'

export default function Index(){
    const [status, setStatus] = useState({
        isLogginIn:true,
        isRegister:false,
        isMainComponentShow:false
    })

   const setStat = (param) => {
    switch(param){
        case "login":
            setStatus(prev => {
                return { isLogginIn:true,
                    isRegister:false,
                    isMainComponentShow:false}
            })
        break;
        case "register":
            setStatus(prev => {
                return { isLogginIn:false,
                    isRegister:true,
                    isMainComponentShow:false}
            })
    }
   }


   if(status.isLogginIn){
       return <Login setStat={setStat}/>
   }
   if(status.isRegister){
       return <Register/>
   }
}

const myStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#02215A'
    }
})

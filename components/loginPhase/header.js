import React from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'


export default function Header(){
    return(
        <View style={myStyle.container}>
            <Text style={myStyle.logo}>CMU NOW</Text>
            <Text style={myStyle.subText}>City Of Malabon University</Text>
        </View>
    )
}

const myStyle = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        color:'white',
        fontSize:35,
        fontWeight:'bold'
    },
    subText:{
        color:'white',
        fontSize:15,
    }
})

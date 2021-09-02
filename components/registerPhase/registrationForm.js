import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, Button,} from 'react-native'
import RadioButton from 'expo-radio-button'


export default function Index(){
    const [gender, setSelectedLanguage] = useState([]);
    const [current, setCurrent] = useState("option 1")

    return(
      <View  style={myStyle.container}>
        <Text style={myStyle.logo}>REGISTER</Text>
        <View style={myStyle.subContainer}>
            <View style={myStyle.textDiv}>
                <Text style={myStyle.text}>Last Name:</Text>
                <TextInput
                style={myStyle.textInput}
                />
            </View>
            <View style={myStyle.textDiv}>
                <Text style={myStyle.text}>First Name:</Text>
                <TextInput
                style={myStyle.textInput}
                />
            </View>
            <View style={myStyle.textDiv}>
                <Text style={myStyle.text}>Middle Name:</Text>
                <TextInput
                style={myStyle.textInput}
                />
            </View>
            <View style={myStyle.textDiv}>
                <Text style={myStyle.text}>Age:</Text>
                <TextInput
                style={myStyle.textInput}
                />
            </View>
            <View>
            <RadioButton value="option 1"
                containerStyle={{ marginBottom: 10 }}
                selected={current} onSelected={(value) => setCurrent(value)} 
                radioBackground="green" >
                <Text>Option 1</Text>
            </RadioButton>
            <RadioButton value="option 2" selected={current} onSelected={(value) => setCurrent(value)} radioBackground="green" >
                <Text>Option 2</Text>
             </RadioButton>
            </View>
        </View>
      </View>
    )
}

const myStyle = StyleSheet.create({
   container:{
       backgroundColor:'white',
       padding:10,
       paddingVertical:15,
       marginHorizontal:10,
       borderTopRightRadius:40,
       borderBottomLeftRadius:40,
       borderBottomRightRadius:40
   },
   subContainer:{
       paddingHorizontal:10
   },
   logo:{
       fontSize:22,
       color:'#02215A',
       fontWeight:'bold',
       marginBottom:20

   },
   text:{
       color:'black',
       fontSize:15,
       flex:1
   },
   textDiv:{
       flexDirection:'row',
       marginBottom:5,
       alignItems:'center',
       
   },
   textInput:{
       flex:2,
       marginLeft:5,
       backgroundColor:'#e6f0ff',
       padding:8,
       color:'black',
       fontSize:16
   },
   gender:{
    //   backgroundColor:'red',
    //   flexDirection:'row'
   }
})

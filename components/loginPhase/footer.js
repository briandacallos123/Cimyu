import React from 'react'
import {StyleSheet, View, Text, TextInput} from 'react-native'

// icons
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Header(){
    return(
        <View style={myStyle.container}>
          <View style={myStyle.left}>
            <View style={myStyle.fb}>
                <FontAwesome name="facebook-official" size={20} color="white" />
                <Text style={myStyle.text}>City Of Malabon University</Text>
            </View>
            <View style={myStyle.fb}>
                <AntDesign name="copyright" size={20} color="white" />
                <Text style={myStyle.text}>Copyrights from City of Malabon University</Text>
            </View>
          </View>
          
        </View>
    )
}

const myStyle = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
   text:{
       color:'white',
       fontSize:12,
       marginLeft:8,
      
   },
   fb:{
       flexDirection:'row',
       alignItems:'center',
       marginBottom:5
   },
   right:{
        flex:1,
         alignItems:'flex-end'
   }
})

import React, {useState} from 'react'
import {StyleSheet, View, Text, TextInput, Button} from 'react-native'



export default function Index({setStat}){
    const [isAdmin, setIsAdmin] = useState(false);

    return(
     
            <View style={myStyle.container}>
           {/* logo */}
           <Text style={myStyle.logo}>LOGIN {isAdmin && "| ADMIN"}</Text>
            <View style={myStyle.divContainer}>
                <Text style={myStyle.text}>Username</Text>
                <TextInput
                style={myStyle.textInput}
                />
            </View>
            <View style={myStyle.divContainer}>
                <Text style={myStyle.text}>Password</Text>
                <TextInput
                style={myStyle.textInput}
                />
            </View>
            <View style={myStyle.divContainer}>
                <Button
                title="LOGIN"
                onPress={()=>setIsAdmin(!isAdmin)}
                />
                <Text style={myStyle.textLink}>Forgon Password?</Text>
            </View>
            <View>
                <Text style={myStyle.text}>Login As <Text style={myStyle.textLink}>Guest?</Text></Text>
                <Text style={myStyle.text}>Don't have an account? <Text style={myStyle.textLink} onPress={()=>{
                    setStat("register")
                }}>Register</Text></Text>
            </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingHorizontal:30,
        paddingVertical:15,
        marginHorizontal:10,
        borderTopRightRadius:40,
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40

    },
    logo:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15
    },
    text:{
        fontSize:16,
        color:'black',
        marginBottom:5
    },
    textInput:{
        backgroundColor:'#e6f0ff',
        padding:8,
        color:'black',
        fontSize:16
    },
    textLink:{
        color:'#00B2FF',
        fontSize:17
    },
    divContainer:{
        marginBottom:10
    }


})

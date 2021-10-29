import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";
import InputText from "../components/Input";
import { Link } from '@react-navigation/native';


export default function Signup() {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Signup</Text>
            <Text style={styles.secondHead}>Add your details to Signup</Text>
            <InputText placeholder="Name" style={styles.input} />
            <InputText placeholder="Email" style={styles.input} />
            <InputText placeholder="Password" style={styles.input} />
            <InputText placeholder="Confirm Password" style={styles.input} />
            <TouchableOpacity  style={styles.button}><Link to={{screen:'Login'}} style={styles.link}>Sign Up</Link></TouchableOpacity>
            <Text style={styles.textDetail}>Already have any Account <Link style={styles.innerLink} to={{screen:'Login'}}>Login</Link>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width:"100%",
height:"auto",
paddingHorizontal: 10    },

    input: {
        color: 'black',
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginVertical:10,
        borderRadius:20
        

    },
    head: {
        fontSize: 25,
        textAlign:'center' ,
        marginVertical:10

    },
    secondHead:{
        color:'gray',
        textAlign:'center' ,
        marginVertical:10


    },
    button: {
        width:'100%',
        textAlign:'center' ,
        backgroundColor: '#45fa81',
        color: 'white',
        paddingHorizontal: 25,
        paddingVertical: 15,
        borderRadius:20,
        marginBottom:20
    },
      
    textDetail:{
        color:'gray',
        textAlign:'center' ,

    },
    innerLink:{
        fontWeight:'bold',
        color:'#45fa81',
        textAlign:'center' ,

    },
        link:{
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            color:'white',
            textAlign:'center' ,

        }
    
}
)
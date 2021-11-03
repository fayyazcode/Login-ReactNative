import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";
import InputText from "../components/Input";
import { Link } from '@react-navigation/native';


export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Login</Text>
            <Text style={styles.secondHead}>Add your details to login</Text>
            <InputText placeholder="Email" style={styles.input} />
            <InputText placeholder="Password" style={styles.input} />
            <TouchableOpacity title='Submit' style={styles.button}> <Link style={styles.innerLink} to={{screen:'Quiz',params: { id: 'Quiz' }}}>Login</Link></TouchableOpacity>
            <Text style={styles.textDetail}><Link to={{screen:'ResetPass'}}>Forget your Password ?</Link></Text>
            <Text style={styles.textDetail}>Don't have any Account  <Link style={styles.innerLink} to={{screen:'Signup',params: { id: 'Signup' }}}>Sign Up</Link>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"auto",
        paddingHorizontal: 10 },

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
        textAlign:'center' ,
        backgroundColor: '#45fa81',
        color: 'white',
        paddingHorizontal: 25,
        paddingVertical: 15,
        marginVertical:10,
        borderRadius:20,
        marginBottom:20



    },   
    textDetail:{
        color:'gray',
        textAlign:'center' ,
        marginBottom:20


    },
    link:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        color:'white',
        textAlign:'center' ,

    }
    ,
    innerLink:{
        fontWeight:'bold',
        color:'#45fa81'
    }
}
)
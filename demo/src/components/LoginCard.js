import React from "react";
import {StyleSheet, View, Text, Image, Dimensions, Button, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function LoginCard({navigation}){
    return(
        <View style={styles.container}>
        <View style={styles.borderstyless}>
        <Text style={styles.labelStyle}>FIND YOUR BUS</Text>
        </View>
        
    </View>
    )
}




const deviceWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    
    container: {
        width: deviceWidth,
        height: 370,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50
    },

    labelStyle: {
        fontSize: 45,
        fontWeight: '400',
        color: "white",
        padding: 10
    },

    borderstyless: {
        borderColor: 'white',
        borderWidth: 5,
        borderRadius:25,
        margin: 5
    }
   
})
import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const Header = (props) => {
    return <View style={styles.container}>
        <View style={styles.borderstyless}>
        <Text style={styles.labelStyle}>FIND YOUR BUS</Text>
        </View>
        
    </View>
}

const deviceWidth = Dimensions.get("window").width;


const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: 170,
        backgroundColor: "darkgoldenrod",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 30
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
export default Header;
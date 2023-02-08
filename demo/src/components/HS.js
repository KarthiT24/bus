import React from "react";
import { ScrollView, View, Text, StatusBar, FlatList,Button } from "react-native";
import Header from "../Components/Header";
import Pudukottai from "../Components/Pudukottai";
import Central from "../Components/Central";
import Chathiram from "../Components/Chathiram";
import KkNagar from "../Components/KkNagar";
import Kattur from "../Components/Kattur";
import Wuraiyur from "../Components/Wuraiyur";
import Airport from "../Components/Airport";
import Dalmiapuram from "../Components/Dalmiapuram";
import Karumandapam from "../Components/Karumandapam";
import Lalgudi from "../Components/Lalgudi";
import Nagamangalam from "../Components/Nagamangalam";
import Perambalur from "../Components/Perambalur";
import Srirangam from "../Components/Srirangam";
import Tanjore from "../Components/Tanjore";
import Tiruvanaikoil from "../Components/Tiruvanaikoil";


export default function HomeScreen({navigation}){
    return(
   
        <ScrollView >
                <Header></Header>
                    <Pudukottai navigation={navigation}></Pudukottai>
                

                    <Central navigation={navigation}></Central>
                    <Chathiram navigation={navigation}></Chathiram>
                    <KkNagar navigation={navigation}></KkNagar>
                    <Kattur navigation={navigation}></Kattur>
                    <Airport navigation={navigation}></Airport>
                    <Dalmiapuram navigation={navigation}></Dalmiapuram>
                    <Karumandapam navigation={navigation}></Karumandapam>
                    <Lalgudi navigation={navigation}></Lalgudi>
                    <Nagamangalam navigation={navigation}></Nagamangalam>
                    <Perambalur navigation={navigation}></Perambalur>
                    <Srirangam navigation={navigation}></Srirangam>
                    <Tanjore navigation={navigation}></Tanjore>
                    <Tiruvanaikoil navigation={navigation}></Tiruvanaikoil>
                    <Wuraiyur navigation={navigation}></Wuraiyur>
    </ScrollView>
                            
    )
}


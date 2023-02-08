import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView
} from 'react-native';

export default class Craigslist extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false,
      userSelected:[],
      data: [
        {id:1,  name: "Chathiram",busno:"Bus Number: 1"},
        {id:2,  name: "Pudukottai",busno:"Bus Number: 1"},
        {id:3,  name: "Thiruvanaikovil",busno:"Bus Number: 1"} ,
        {id:4,  name: "KK Nagar",busno:"Bus Number: 1"} ,
        {id:5,  name: "Sri Rangam",busno:"Bus Number: 1"} ,
        {id:6,  name: "Tolgate",busno:"Bus Number: 1"}
      ]
    };
  }
  
  

  clickEventListener = (item) => {
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={require('../../assets/B1.png')}/>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.busno}>{item.busno}</Text>
                <Text style={styles.count}>{item.count}</Text>
                <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                  <Text style={styles.followButtonText}>Explore now</Text>  
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7"
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },busno:{
    fontSize:14,
    fontWeight:'bold',marginLeft:'auto',marginRight:'auto'
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "white",
    borderWidth:1,
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "black",
    fontSize:12,
    fontWeight:'normal'
  },
}); 


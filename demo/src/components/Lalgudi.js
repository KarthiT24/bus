import { View,Text,StyleSheet, Dimensions } from 'react-native';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import { Icon } from 'react-native-elements';
export default function Lalgudi({navigation}){
    return(
        <View style={{paddingTop: 20}}>
            <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
                <CollapseHeader style={{flexDirection:'row',alignItems:'center',padding:10,backgroundColor:'darkgoldenrod'}}>
                    <View style={{width:'25%',alignItems:'center'}}>
                        <Icon name="md-bus" size={45} type="ionicon"></Icon>

                    </View>
                    <View>
                        <Text style={{fontWeight: '700',fontSize: 35}}>LALGUDI</Text>
                    </View>
                </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'column',backgroundColor:'azure',borderBottomWidth: 1,borderColor:'black'}}>
                <Collapse style={{flexDirection:'row',}}>
                    <CollapseHeader style={{flexDirection:"row"}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.texts}>24</Text>
                        <Icon name="md-play-skip-forward" size={25} type="ionicon" style={{paddingTop:5 }}></Icon>
                    </View>
                    </CollapseHeader>
                    <CollapseBody style={{alignItems:'center',justifyContent:'center',paddingLeft:10,fontWeight: '500',fontSize: 25,}}>
                        <Text style={styles.texts} onPress={() => navigation.navigate('Map')}>TAP TO SEE THE LOCATION</Text>
                    </CollapseBody>
                </Collapse>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black', borderBottomColor:'black',borderBottomWidth: 3}} />
                            <View>
                               
                            </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black',borderBottomColor:'black',borderBottomWidth: 3}} />
                </View>
                <Collapse style={{flexDirection:'row'}}>
                    <CollapseHeader>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.texts}>22</Text>
                        <Icon name="md-play-skip-forward" size={25} type="ionicon" style={{paddingTop:5 }}></Icon>
                    </View>
                    </CollapseHeader>
                    <CollapseBody style={{alignItems:'center',justifyContent:'center',paddingLeft:10}}>

                         <Text style={styles.texts} onPress={() => navigation.navigate('Map')}>TAP TO SEE THE LOCATION</Text>
                    </CollapseBody>
                </Collapse>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black', borderBottomColor:'black',borderBottomWidth: 2}} />
                            <View>
                               
                            </View>
                            <View style={{flex: 1, height: 1, backgroundColor: 'black',borderBottomColor:'black',borderBottomWidth: 2}} />
                </View>
            </CollapseBody>
        </Collapse>
</View>

    )
}


const styles=StyleSheet.create(
{
    texts:{
        fontWeight: '500',
        fontSize: 25,
    }
}
)

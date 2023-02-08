import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
// import emptyScreen from './src/screens/emptyScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return( 
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="LOGIN" component={LoginScreen} />
    <Stack.Screen name="home" component={HomeScreen} />
    {/* <Stack.Screen name="main" component={emptyScreen}/> */}
    
    
  </Stack.Navigator>
</NavigationContainer>
  )
}

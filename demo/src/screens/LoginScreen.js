import { useNavigation } from '@react-navigation/core'
import React, {  useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from 'react-native'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, onAuthStateChanged, applyActionCode} from "firebase/auth";
import HomeScreen  from './HomeScreen';
//firebase authentication?

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  
const login = ()=> {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('logged in',user.email);
      navigation.navigate('home');
      // alert('loggedin')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <View style={styles.inputContainer}>
      <Image style={styles.Image} source={require('../../assets/download.jpeg')} />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={login}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
   
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F7F7F7', 
  },
  inputContainer: {
    width: '80%',
    
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 3,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    
    fontWeight: '700',
    fontSize: 16,
  },
 Image:{
   
  
  height: 200,
  width: 200,
  borderRadius: 100,
  marginBottom:10,
  marginLeft:'auto',marginRight:'auto'
 }
})
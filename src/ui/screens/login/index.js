import React, {useState} from 'react'
import styles from './styles'
import {View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Button } from '../../components/button'
import axios from 'axios';

const LoginView = ({props, nav}) => {

  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Email</Text>
      <TextInput
        placeholder = "Enter your email"
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setEmail(text)}}
      />
      <Text style={styles.baseText}>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder = "Enter your password"
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setPassword(text)}}
      />
      <View style={{ margin: 10, flexDirection:'row'}}>
        <Button
          label="Login"
          title="Login"
          onPress={() => loginFunction(nav, email, password)}
         />
        <Button
          label="Register"
          title="Register"
          onPress={() => nav.navigate('RegisterStack')}
         />
      </View>
    </View>
  )
}

export function Login({ navigation }) {

  return(
    <View style={styles.container}>
      <LoginView nav={navigation}></LoginView>
    </View>
  )
}

function loginFunction(nav, email, password){
  axios({
      method: 'post',
      url: 'http://eeducaapi.azurewebsites.net/api/Usuarios/Login',
      headers: {},
      data: {
        	"Email": email,
        	"Senha": password
      }
    })
  .then(function (response) {
    if(response.status == 200){
      console.log("success")
      nav.navigate('GroupsStack', {key: response.data})
    }
  })
  .catch(function (error) {
    // handle error
    //console.log(error);
    Alert.alert("Credenciais de Email ou Senha inválidas")
  })
}

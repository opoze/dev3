import React, {useState} from 'react'
import styles from './styles'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import { Button } from '../../components/button'
import axios from 'axios';

const LoginView = ({props}) => {

  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Email</Text>
      <TextInput
        placeholder = "Enter your email"
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setEmail(text), console.log('setEmail', email)}}
      />
      <Text style={styles.baseText}>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder = "Enter your password"
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setPassword(text), console.log('password', password)}}
      />
    </View>
  )
}

export function Login({ navigation, props }) {
  return(
    <View style={styles.container}>
      <LoginView></LoginView>
      <View style={{ margin: 10, flexDirection:'row'}}>
        <Button
          label="Login"
          title="Login"
          onPress={() => login(navigation)}
        />
        <Button
          label="Register"
          title="Register"
          onPress={() => navigation.navigate('RegisterStack')}
                />
        </View>
    </View>
  )
}

function login(nav){
nav.navigate('RegisterStack') //SE DER CERTO ENVIA PARA A TELA
  axios.post('https://eeducaapi.azurewebsites.net/api/Usuarios/Login', {
      params: {
         Email: "lucas.rtk@hotmail.com",
         Senha: "1"
      }
    })
    .then(function (response) {
      Alert.alert(response.status)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

import React, {useState, useEffect} from 'react'
import styles from './styles'
import {View, Text, TextInput, ActivityIndicator, Alert } from 'react-native'
import { Button } from '../../components/button'
import axios from 'axios';

import AuthService from '../../../services/auth'

const LoginView = ({props, nav}) => {

  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  const [isLoging, setIsLoging] = useState(false)

  useEffect(() => {
    if(AuthService.isLogged()) {
      nav.navigate('GroupsStack')
    }
  }, [])


  function doLogin(email, password) {
    setIsLoging(true)
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
        AuthService.setUser(response.data, email)
        setIsLoging(false)
        nav.navigate('GroupsStack')
      }
    })
    .catch(function (error) {
      console.log(error)
      setIsLoging(false)
      Alert.alert("Credenciais de Email ou Senha inválidas")
    })
  }

  if(isLoging) {
    return <ActivityIndicator />
  }
  else {
      return (
        <View style={styles.container}>
        <Text style={styles.baseText}>Email</Text>
        <TextInput
          placeholder = "Enter your email"
          style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1, color: '#000'}}
          onChangeText={text => {setEmail(text)}}
          value={'teste@hotmail.com'}
          />
        <Text style={styles.baseText}>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder = "Enter your password"
          style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1, color: '#000'}}
          onChangeText={text => {setPassword(text)}}
          value={'teste'}
          />
        <View style={{ margin: 10, flexDirection:'row'}}>
          <Button
            label="Login"
            title="Login"
            onPress={() => doLogin(email, password)}
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
}

export function Login({ navigation }) {
  return(
    <View style={styles.container}>
      <LoginView nav={navigation}></LoginView>
    </View>
  )
}


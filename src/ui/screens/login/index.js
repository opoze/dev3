import React, {useState, useEffect} from 'react'
import styles from './styles'
import {View, Text, TextInput, ActivityIndicator, Alert, Image } from 'react-native'
import { Button } from '../../components/button'
import axios from 'axios';

import AuthService from '../../../services/auth'

const LoginView = ({props, nav}) => {

  const [email, setEmail] = useState('teste@hotmail.com');
  const [password, setPassword] = useState('teste');
  const [isLoging, setIsLoging] = useState(false)

  useEffect(() => {
    if(AuthService.isLogged()) {
      nav.navigate('GroupsStack')
    }
  }, [])


  function doLogin(email, password) {
    if(email == ""){
        Alert.alert("Favor preencher o campo email.")
    } else if(password == ""){
        Alert.alert("Favor preencher o campo senha.")
     } else{
        setIsLoging(true)
        console.log(`LOGANDO ${email} ${password}`)
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
            console.log(response)
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
  }

  if(isLoging) {
    return <ActivityIndicator />
  }
  else {
      return (
       <View style={styles.container}>
          <Text style={styles.baseText}>Email</Text>
          <TextInput
            placeholder = "Digite seu email"
            style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1, color: '#000'}}
            onChangeText={text => {setEmail(text)}}
            />
          <Text style={styles.baseText}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            placeholder = "Digite sua senha"
            style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1, color: '#000'}}
            onChangeText={text => {setPassword(text)}}
            />
          <View style={{ margin: 10, flexDirection:'row'}}>
            <Button
              label="Login"
              title="Login"
              onPress={() => doLogin(email, password)}
              />
            <Button
              label="Novo Usuário"
              title="Novo Usuário"
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


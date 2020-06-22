import React, {useState} from 'react'
import styles from './styles'
import {View, Text, TextInput, Alert} from 'react-native'
import { Button } from '../../components/button'
import axios from 'axios';

const RegisterView = ({nav}) => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
    <Text style={styles.baseText}>Nome</Text>
      <TextInput
        placeholder = "Enter your nome"
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setNome(text)}}
      />
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
          label="Create new Account"
          title="Create new Account"
          onPress={() => createAccount(nav, nome, email, password)}
        />
        <Button
          label="Login"
          title="Login"
          onPress={() => nav.navigate('LoginStack')}
        />
      </View>
    </View>
  )
}

export function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <RegisterView nav={navigation}></RegisterView>
    </View>
  )
}
function createAccount(nav, nome, email, password){
  if(nome == ""){
    Alert.alert("Favor preencher o campo nome.")
  } else if(email == ""){
    Alert.alert("Favor preencher o campo de email.")
  } else if (password == ""){
    Alert.alert("Favor preencher o campo de senha.")
  } else{
  //console.log(nome, email, password);
  //nav.navigate('RegisterStack') //SE DER CERTO ENVIA PARA A TELA
    axios({
        method: 'post',
        url: 'http://eeducaapi.azurewebsites.net/api/Usuarios/Registrar',
        headers: {},
        data: {
          	"Email": email,
          	"Nome": nome,
          	"Senha": password
        }
      })
      .then(function (response) {
        if(response.status == 200){
          Alert.alert("Usuário Registrado com Sucesso!")
        }
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
        Alert.alert("Credenciais de Email ou Senha inválidas")
      })
      .then(nav.navigate('LoginStack'))
  }
}



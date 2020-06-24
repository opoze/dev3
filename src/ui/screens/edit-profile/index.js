import React, {useState} from 'react'
import styles from './styles'
import {View, Text, TextInput} from 'react-native'
import { Button } from '../../components/button'

const ProfileView = ({nav}) => {

  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Nome</Text>
      <TextInput
        value='Teste Bot'
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setName(text)}}
      />

      <Text style={styles.baseText}>Email</Text>
      <TextInput
        value= 'teste@gmail.com'
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setEmail(text)}}
      />
      <Text style={styles.baseText}>Senha</Text>
      <TextInput
        secureTextEntry={true}
        value= 'teste'
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setPassword(text)}}
      />
      <Text style={styles.baseText}></Text>
       <View style={{ margin: 10, flexDirection:'row'}}>
          <Button
            label="Salvar"
            title="Salvar"
            onPress={() => createAccount(nav, nome, email, password)}
          />
      </View>
    </View>
  )
}

export function Profile({navigation}) {
  return(
    <View style={styles.container}>
      <ProfileView nav={navigation}></ProfileView>
    </View>
  )
}

function editProfile(nav, nome, email, password){
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
        method: 'put',
        url: 'http://eeducaapi.azurewebsites.net/api/Usuarios/????',
        headers: {},
        data: {
          	"Email": email,
          	"Nome": nome,
          	"Senha": password
        }
      })
      .then(function (response) {
        if(response.status == 200){
          Alert.alert("Usuário Alterado com Sucesso!")
        }
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
        Alert.alert("Credenciais de Nome, Email ou Senha inválidas")
      })
  }
}



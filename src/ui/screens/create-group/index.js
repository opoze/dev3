import React, { useState } from 'react'
import styles from './styles'
import { View, TextInput, Text, Alert, ActivityIndicator } from 'react-native'

import { Button } from '../../components/button'
import authService from '../../../services/auth'
import api from '../../../services/api'

function Input(props) {
  const { label, value, onChangeText, placeholder, invalid = false } = props
  return (
    <View style={{ height: 100, width: '100%', padding: 20, justifyContent: 'center' }}>
      <View>
        <Text style={{ margin: 2, fontWeight: 'bold' }}>{label}</Text>
      </View>
      <View
        style={{
          borderBottomColor: invalid ? 'red' : 'blue',
          borderBottomWidth: 1,
        }}
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          maxLength={50}
        />
      </View>
    </View>
  )
}

export function CreateGroupScreen({navigation}) {

  const [name, setName] = useState('');
  const [descricao, setDescricao] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  function goBackToGroup() {
    Alert.alert('Grupo Criado com Sucesso!','',[
      {
        text: 'Ok', onPress: () => navigation.goBack()
      },
    ]);
  }

  function createGroup(){
    setIsLoading(true);
    api.defaults.headers.common['Authorization'] = `Bearer ${authService.token}`;
    api.post('/Grupos/Novo', null, { params: {Nome: name, Descricao: descricao}})
    .then((response) => {
      setIsLoading(false);
      if(response.status == 200){
        goBackToGroup();
      }
    })
    .catch(function (error) {
      setIsLoading(false);
      Alert.alert("Erro ao cadastrar novo grupo.");
    })
  }

  if(isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Input nav={navigation}
        label='Nome:'
        value={name}
        placeholder='Nome do grupo'
        onChangeText={text => {setName(text)}}
      />
      <Input nav={navigation}
        label='Descrição:'
        value={descricao}
        placeholder='Descrição do grupo'
        onChangeText={text => {setDescricao(text)}}
      />
      <Button label='Cadastrar Grupo' onPress={createGroup}/>
    </View>
  )
}

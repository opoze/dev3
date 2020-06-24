import React, {useState, useEffect} from 'react'
import styles from './styles'
import { View, Text, FlatList, Image, ActivityIndicator, Alert, SafeAreaView, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { Button } from '../../components/button'
import authService from '../../../services/auth'
import api from '../../../services/api'

export function Group({ key, navigation }) {

  const [mensagens, setMensagens] = useState([])
  const [gettingMensagens, setGettingMensagens] = useState(false)

  useEffect(() => {
    getGroup(AuthService.selectedGroupId)
  }, [])

  function getMensagens() {
    setGettingMensagens(true)
    api.defaults.headers.common['Authorization'] = `Bearer ${authService.token}`;
    api.get('/Grupos/ListarMensagens', null, { params: {GrupoId: authService.selectedGroupId}})
        .then((response) => {
          if(response.status == 200){
            console.log(response)
            //setGroups(response.data)
            //setGettingGroups(false)
            //Alert.alert("Não foi possivel buscar as mensagens do grupo. " + response.status)
          }
        })
    .catch(function (error) {
      console.log(error)
      setGettingMensagens(false)
      Alert.alert("Não foi possivel buscar as mensagens do grupo.")
    })
  }

  if(gettingMensagens) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
      <SafeAreaView style={styles.container}>
        {(mensagens.length > 0 )&&
          <FlatList
            data={mensagens}
            renderItem={({ item }) => <Group {...item} />}
            keyExtractor={(item) => item.Id}
            style={styles.list}
            />
        }
        {(mensagens.length <= 0) &&
          (<Text>:( Este grupo não contem nenhuma mensagem.</Text>)
        }
        <View style={{ margin: 10 }}>
          <Button
            label='Nova Mensagem'
            onPress={() =>
              // getUserGroups()
              navigation.navigate('CreateMensagem')
            }
            />
        </View>
      </SafeAreaView>
  )
}

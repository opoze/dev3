import React, {useState, useEffect} from 'react'
import styles from './styles'
import { View, Text, FlatList, Image, ActivityIndicator, Alert, SafeAreaView, TouchableOpacity } from 'react-native'

import axios from 'axios'

import { Button } from '../../components/button'
import AuthService from '../../../services/auth'

export function Group({ key, navigation }) {

  const [groups, setGroups] = useState([])
  const [gettingGroups, setGettingGroups] = useState(false)

  useEffect(() => {
    getGroup(AuthService.selectedGroupId)
  }, [])

  function getGroup() {
    setGettingGroups(true)
    axios({
      method: 'get',
      url: 'https://eeducaapi.azurewebsites.net/api/Grupos/Listar?group_id',
      headers: {Authorization: `Bearer ${AuthService.token}`, 'Content-Type': 'application/json'},
    })
    .then(function (response) {
      if(response.status == 200){
        console.log(response)
        setGroups(response.data)
        setGettingGroups(false)
        Alert.alert("Não foi possivel buscar os grupos. " + response.status)
      }
    })
    .catch(function (error) {
      console.log(error)
      setGettingGroups(false)
      Alert.alert("Não foi possivel buscar os grupos.")
    })
  }

  if(gettingGroups) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
      <SafeAreaView style={styles.container}>
        {(groups.length > 0 )&&
          <FlatList
            data={groups}
            renderItem={({ item }) => <Group {...item} />}
            keyExtractor={(item) => item.Id}
            style={styles.list}
            />
        }
        {(groups.length <= 0) &&
          (<Text>:( Você não está em nenhum grupo.</Text>)
        }
        <View style={{ margin: 10 }}>
          <Button
            label='Novo Grupo'
            onPress={() =>
              // getUserGroups()
              navigation.navigate('CreateGroup')
            }
            />
        </View>
      </SafeAreaView>
  )
}

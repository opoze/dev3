import React, {useState, useEffect} from 'react'
import styles from './styles'
import { View, Text, FlatList, Image, ActivityIndicator, Alert, SafeAreaView, TouchableOpacity } from 'react-native'

import axios from 'axios'

import { Button } from '../../components/button'
import authService from '../../../services/auth'
import api from '../../../services/api'

function Group(props) {
  const { Nome, DataHoraCriacao, descricao, Chave, users, Id } = props

  function goToGroup() {
    authService.selectedGroupId(Id)
    navigation.navigate('Group')
  }

  function renderContent() {
    return (
      <TouchableOpacity onPress={() => goToGroup()} >
        <View style={styles.groupContainer}>
          <Image
            source={require('../../../res/images/no-image.jpg')}
            style={styles.groupImage}
            />
          <View style={styles.infoContainer}>
            <View style={styles.line}>
              <Text style={styles.nameText}>{Nome}</Text>
              <Text style={styles.userText}>{`${users} users`}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.keyText}>{Chave}</Text>
              <Text style={styles.dateText}>{DataHoraCriacao}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.descriptionText} numberOfLines={3}>
                {descricao}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return renderContent()
}

export function GroupsScreen({ navigation }) {

  const [groups, setGroups] = useState([])
  const [gettingGroups, setGettingGroups] = useState(false)

  useEffect(() => {
    getUserGroups()
  }, [])

  function getUserGroups() {
    api.defaults.headers.common['Authorization'] = `Bearer ${authService.token}`;

    setGettingGroups(true)
    api.get('/Grupos/Listar').then((response) => {
      console.log('RESPONSE:', response.data);

      if(response.status == 200){
        setGroups(response.data)
        setGettingGroups(false)
      }
    });
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

import React from 'react'
import styles from './styles'
import { View, Text, Alert } from 'react-native'

import { Button } from '../../components/button'

export function GroupsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button label="Novo Grupo" onPress={() => navigation.navigate('CreateGroup')}/>
    </View>
  )
}

import React, { useState, useEffect } from 'react'
import styles from './styles'
import { View, TextInput, Text, Alert } from 'react-native'

import { Button } from '../../components/button'

function Input(props) {


  const { label, value, onChangeText, placeholder, invalid = false } = props

  return (
    <View style={{ height: 100, width: '100%', padding: 20, justifyContent: 'center' }}>
      <View>
        <Text style={{ margin: 2, fontWeight: 'bold' }}>{label}</Text>
      </View>
      <View
        style={{
          // backgroundColor: 'gray',
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

export function CreateGroupScreen() {

  const [name, setName] = useState('')
  const [nameInvalid, setNameInvalid] = useState(false)
  const [isSubmiting, setIsSubmiting] = useState(false)

  const onChangeGroupName = (text) => {
    setNameInvalid(false)
    setName(text)
  }

  const onSubmit = () => {
    setIsSubmiting(true)
    setTimeout(() => {
      if(name.length === 0) {
        setNameInvalid(true)
        Alert.alert('CADASTRO NOT')
      } else {
        setNameInvalid(false)
        Alert.alert('CADASTRO OK')
      }
      setIsSubmiting(false)
    }, 3000)
  }

  return (
    <View style={styles.container}>
      <Input
        label='Nome:'
        value={name}
        placeholder='Nome do grupo'
        onChangeText={onChangeGroupName}
        invalid={nameInvalid}
      />
      <Button label='Cadastrar' onPress={onSubmit} disabled={isSubmiting}/>
    </View>
  )
}

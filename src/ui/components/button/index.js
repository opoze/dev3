import React from 'react'
import styles from './styles'
import { Text, TouchableOpacity } from 'react-native'

export function Button(props) {
  const { label, onPress, disabled } = props

  return (
    <TouchableOpacity style={[styles.button, disabled && {backgroundColor: 'gray'}]} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  )
}

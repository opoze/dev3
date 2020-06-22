import React, {useState} from 'react'
import styles from './styles'
import {View, Text, TextInput} from 'react-native'
import { Button } from '../../components/button'
const RegisterView = () => {

  const [username, setUsername] = useState(true);
  const [password, setPassword] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState(true);

  return (
    <View style={styles.container}>
    <Text style={styles.baseText}>Username</Text>
      <TextInput
        placeholder = "Enter your username"
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setUsername(text), console.log('username',username)}}
      />
     <Text style={styles.baseText}>Email</Text>
      <TextInput
        placeholder = "Enter your email"
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setUsername(text), console.log('username',username)}}
      />
      <Text style={styles.baseText}>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder = "Enter your password"
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setPassword(text), console.log('password', password)}}
      />
      <TextInput
              secureTextEntry={true}
              placeholder = "Repeat your password"
              style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => {setPassword(text), console.log('password', password)}}
            />
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>

       <Button
          title='Create New Account'
          color='#000000'
          onPress={() => createAccount()}
        />
        <Button
            title='Sign In'
            display= 'inline-block'
            onPress={() => navigation.navigate('Login')}
          />
      </View>
    </View>
  )
}

function createAccount(){
  //manda request com o state para o backend
}

export function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <RegisterView></RegisterView>
      </View>
      <View style={styles.container}>
            <View style={{ margin: 10 }}>
              <Button
                label="Login"
                title="Login"
                onPress={() => navigation.navigate('LoginStack')}
              />
            </View>
          </View>
    </View>
  )
}

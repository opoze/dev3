import React, {useState} from 'react'
import styles from './styles'
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native'
import { Register } from '../../screens/register'

const LoginView = ({props}) => {

  const [username, setUsername] = useState(true);
  const [password, setPassword] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Username/Email</Text>
      <TextInput
        placeholder = "Enter your username/email"
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

      <TouchableOpacity>
                <Text style={{
                  fontSize: 16,
                  textDecorationLine: 'underline',
                  color: 'black',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom:20,
                }}>Esqueci minha senha...</Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <Button
          title="Sign In"
          color='#000000'
          display= 'inline-block'
          onPress={() => navigation.navigate('Login')}
        />
       <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  )
}

export function Login() {
  return(
    <View style={styles.container}>
      <LoginView></LoginView>
    </View>
  )
}


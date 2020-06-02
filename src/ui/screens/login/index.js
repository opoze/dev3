import React, {useState} from 'react'
import styles from './styles'
import {View, Text, TextInput, Button} from 'react-native'
import { Register } from '../../screens/register'

const LoginView = (props) => {

  const [username, setUsername] = useState(true);
  const [password, setPassword] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setUsername(text), console.log('username',username)}}
      />
      <TextInput
        secureTextEntry={true}
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setPassword(text), console.log('password', password)}}
      />
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <Button
          title="Sign In"
          color='#000000'
          display= 'inline-block'
          onPress={() => this.props.navigation.navigate('Login')}
        />
       <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
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


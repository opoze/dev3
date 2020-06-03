import React, {useState} from 'react'
import styles from './styles'
import {View, Text, TextInput, Button} from 'react-native'

const ProfileView = ({props}) => {

  const [username, setUsername] = useState(true);
  const [password, setPassword] = useState(true);

  return (
    <View style={styles.container}>

      <Text style={styles.baseText}>Nome Apresentação</Text>
      <TextInput
        value='Teste Bot'
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setUsername(text), console.log('username',username)}}
      />

      <Text style={styles.baseText}>Username</Text>
      <TextInput
        value='teste123'
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setUsername(text), console.log('username',username)}}
      />

      <Text style={styles.baseText}>Email</Text>
      <TextInput
        value= 'teste@gmail.com'
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setPassword(text), console.log('password', password)}}
      />
      <Text style={styles.baseText}>Password</Text>
      <TextInput
        secureTextEntry={true}
        value= 'password'
        style={{ height: 40, width: 300, margin: 10, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => {setPassword(text), console.log('password', password)}}
      />
      <Text style={styles.baseText}></Text>
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <Button
          title="Save"
          color='#000000'
          display= 'inline-block'
          onPress={() => this.props.navigation.navigate('Login')}
        />
       <Button
          title="Cancel"
          color='#808080'
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    </View>
  )
}

export function Profile() {
  return(
    <View style={styles.container}>
      <ProfileView></ProfileView>
    </View>
  )
}


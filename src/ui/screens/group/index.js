import React, {useState, useEffect} from 'react'
import styles from './styles'
import { View, Text, FlatList, ActivityIndicator, Alert, SafeAreaView, TextInput } from 'react-native'
import { Button } from '../../components/button'
import authService from '../../../services/auth'
import api from '../../../services/api'

export function GroupScreen({ navigation, route }) {

  const [mensagens, setMensagens] = useState([]);
  const [messageText, setMessageText] = useState('');
  const [gettingMensagens, setGettingMensagens] = useState(false);

  useEffect(() => {
    getMensagens()
  }, [])

  function sendMensagem(){
    setGettingMensagens(true)
    api.defaults.headers.common['Authorization'] = `Bearer ${authService.token}`;
    api.post('/Grupos/PostarMensagem', null, { params: {Mensagem: messageText, GrupoId: authService.selectedGroupId} })
    .then((response) => {
      if(response.status == 200){
        getMensagens()
      }
    })
    .catch(function (error) {
      setGettingMensagens(false)
      Alert.alert("Não foi possivel enviar a mensagem.")
    })
 }

  function getMensagens() {
    setGettingMensagens(true)
    api.defaults.headers.common['Authorization'] = `Bearer ${authService.token}`;
    api.get('/Grupos/ListarMensagens', { params: {GrupoId: authService.selectedGroupId}})
    .then((response) => {
      if(response.status == 200){
        console.log(response)
        setMensagens(response.data)
        setGettingMensagens(false)
      }
    })
    .catch(function (error) {
      console.log(error)
      setGettingMensagens(false)
      Alert.alert("Não foi possivel buscar as mensagens do grupo.")
    })
  }

  function renderMessage(){
    return(
      <View style={{marginHorizontal: 20, backgroundColor: '#e0f2f1'}}>
        <TextInput
          onChangeText={(value) => {
            setMessageText(value);
          }}
          placeholder='Mensagem'
          maxLength={100}
        />
      </View>
    );
  }

  if(gettingMensagens) {
    return (
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  function renderGroup() {
    const { params } = route;
    const { Descricao, Nome} = params;

    return (
      <View style={{width: '100%', marginVertical: 20}}>
        <Text style={{textAlign: 'center', fontSize: 30}}>{Nome}</Text>
        <Text style={{textAlign: 'center', fontSize: 14, margin: 10}}>{Descricao}</Text>
      </View>
    );
  }

  function renderMessages() {
    if(mensagens.length <= 0) {
      return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>:( Este grupo não contem nenhuma mensagem.</Text>
        </View>
      );
    }
    return (
      <View style={{flex:1}}>
        <FlatList
          data={mensagens}
          renderItem={({ item }) => {
            return (
              <View style={{padding: 10, backgroundColor: '#e8f5e9', borderRadius: 10, margin: 5, marginHorizontal: 20}}>
                <Text>{item.Mensagem}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.Id}
          style={styles.list}
          />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderGroup()}
      {renderMessages()}
      {renderMessage()}
      <View style={{ margin: 10 }}>
        <Button
          label='Enviar'
          onPress={sendMensagem}
          />
      </View>
    </SafeAreaView>
  )
}

import React from 'react'
import styles from './styles'
import { View, Text, FlatList, Image } from 'react-native'

import { Button } from '../../components/button'

const MOCK_TEST_GROUP = {
  name: 'Grupo de testes',
  description:
    'Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Diuretics paradis num copo é motivis de denguis....',
  date: '30/04/2020',
  chave: 'WZSJJ8',
  users: 6,
}

//const GROUPS = Array(10).fill(MOCK_TEST_GROUP)

function Group(props) {
 const { name, date, description, chave, users } = props

  //console.log('@T', props)
  console.log("props", props);
  function renderContent() {
    return (
      <View style={styles.groupContainer}>
        <Image
          source={require('../../../res/images/no-image.jpg')}
          style={styles.groupImage}
        />
        <View style={styles.infoContainer}>
          <View style={styles.line}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.userText}>{`${users} users`}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.keyText}>{chave}</Text>
            <Text style={styles.dateText}>{date}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.descriptionText} numberOfLines={3}>
              {description}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return renderContent()
}

export function GroupsScreen({ key, navigation }) {
  return (
    <View style={styles.container}>

      <FlatList
        data={}
        renderItem={({ item }) => <Group {...item} />}
        keyExtractor={(item) => item.key}
        style={styles.list}
      />
      <View style={{ margin: 10 }}>
        <Button
          label='Novo Grupo'
          onPress={() =>
            //navigation.navigate('CreateGroup');
            console.log(key)
            }
        />
      </View>
    </View>
  )
}

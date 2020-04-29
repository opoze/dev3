import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SafeAreaView, Text } from 'react-native'

import { HomeScreen } from './ui/screens/home'
import { CreateGroupScreen } from './ui/screens/create-group'
import { GroupsScreen } from './ui/screens/groups'

import Icon from 'react-native-vector-icons/dist/MaterialIcons'

const BottomTab = createBottomTabNavigator()

function HomeStack() {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerShown: true,
      }}
    >
      <Stack.Screen
        component={HomeScreen}
        name={'Home'}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  )
}

function GroupsStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerShown: true,
      }}
    >
      <Stack.Screen
        component={CreateGroupScreen}
        name={'CreateGroup'}
        options={{ title: 'Novo Grupo' }}
      />
      <Stack.Screen
        component={GroupsScreen}
        name={'Groups'}
        options={{ title: 'Grupos' }}
      />
    </Stack.Navigator>
  )
}

function MainTabs() {
  return (
    <BottomTab.Navigator tabBarOptions={{ showLabel: false }}>
      <BottomTab.Screen
        component={HomeStack}
        name={'HomeStack'}
        options={() => {
          return {
            title: 'Home',
            tabBarIcon: () => <Icon name={'home'} size={20} />,
            tabBarVisible: true,
          }
        }}
      />
      <BottomTab.Screen
        component={GroupsStack}
        name={'GroupsStack'}
        options={() => {
          return {
            title: 'Grupos',
            tabBarIcon: () => <Icon name={'group'} size={20} />,
            tabBarVisible: true,
          }
        }}
      />
    </BottomTab.Navigator>
  )
}

const RootStack = createStackNavigator()

export function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <RootStack.Navigator>
          <RootStack.Screen
            component={MainTabs}
            name={'MinTabs'}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SafeAreaView, Text } from 'react-native'

import { HomeScreen } from './ui/screens/home'
import { CreateGroupScreen } from './ui/screens/create-group'
import { GroupsScreen } from './ui/screens/groups'
import { Login } from './ui/screens/login'
import { Register } from './ui/screens/register'
import { Profile } from './ui/screens/edit-profile'
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
        name={'HomeScreen'}
        options={{ title: 'Eeduca App' }}
      />
    </Stack.Navigator>
  )
}

function LoginStack() {
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
        component={Login}
        name={'Login'}
        options={{ title: 'Login' }}
      />
    </Stack.Navigator>
  )
}

function RegisterStack() {
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
        component={Register}
        name={'Register'}
        options={{ title: 'Register' }}
      />
    </Stack.Navigator>
  )
}

function ProfileStack() {
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
        component={Profile}
        name={'Profile'}
        options={{ title: 'Edit Profile' }}
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
        component={GroupsScreen}
        name={'Groups'}
        options={{ title: 'Grupos' }}
      />
      <Stack.Screen
        component={CreateGroupScreen}
        name={'CreateGroup'}
        options={{ title: 'Novo Grupo' }}
      />
    </Stack.Navigator>
  )
}

function MainTabs() {
  return (
    <BottomTab.Navigator tabBarOptions={{ showLabel: false }}>
       <BottomTab.Screen
              component={LoginStack}
              name={'LoginStack'}
              options={() => {
                return {
                  title: 'Login',
                  tabBarVisible: false,
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
      <BottomTab.Screen
        component={Profile}
        name={'ProfileStack'}
        options={() => {
          return {
            title: 'ProfileStack',
            tabBarIcon: () => <Icon name={'ProfileStack'} size={20} />,
            tabBarVisible: true,
          }
        }}
      />
       <BottomTab.Screen
          component={RegisterStack}
          name={'RegisterStack'}
          options={() => {
            return {
              title: 'Register',
              tabBarVisible: false,
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

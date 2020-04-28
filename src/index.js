import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { SafeAreaView,  Text } from 'react-native'

import { HomeScreen } from './ui/screens/home'
import { CreateGroupScreen } from './ui/screens/create-group'

const BottomTab = createBottomTabNavigator()

function HomeStack() {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
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
    <Stack.Navigator>
      {/* <Stack.Screen
        component={ShowGroupsScreen}
        name={'ShowGroups'}
        options={{ title: 'ShowGroups' }}
      /> */}
      <Stack.Screen
        component={CreateGroupScreen}
        name={'CreateGroup'}
        options={{ title: 'CreateGroup' }}
      />
    </Stack.Navigator>
  )
}

function MainTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        component={HomeStack}
        name={'HomeStack'}
      />
      <BottomTab.Screen
        component={GroupsStack}
        name={'GroupsStack'}
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

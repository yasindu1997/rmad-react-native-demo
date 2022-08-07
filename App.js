import { View } from 'react-native'
import React from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import AddData from './pages/AddData'
import LoadAll from './pages/LoadAll'
import Upload from './pages/Upload'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="AddData" component={AddData} />
        <Stack.Screen name="LoadAll" component={LoadAll} />
        <Stack.Screen name="Upload" component={Upload} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
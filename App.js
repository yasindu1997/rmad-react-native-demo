import { View } from 'react-native'
import React from 'react'
import HomePage from './pages/HomePage'
import { Input, NativeBaseProvider, Slider, Box, Text, VStack,Button } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack space={1} my={20} alignItems="center">
        <Text fontSize="md" my={60}>Login Screen</Text>
        <Input variant="rounded" w={80} h={10} placeholder="Email" />
        <Input variant="rounded" my={5} w={80} h={10} placeholder="Password" />
        <Button size="sm" my={10} w={20} colorScheme="green">
          Login
        </Button>
      </VStack>
    </NativeBaseProvider>
  )
}
import React, { useState, useEffect } from 'react'
import { Center, Container, NativeBaseProvider, Text, Input, Button, Icon } from 'native-base'
import firestore from '@react-native-firebase/firestore';

export default function AddData({ navigation }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const saveStudent = async () => {
        await firestore()
            .collection('students')
            .add({
                name: name,
                age: age,
                address: address,
                email: email,
                phone: phone
            })
            .then(() => {
                console.log('Student added!');
            })
            .catch((err) => {
                console.error(err);
            });
    }

    const deleteStudent = async () => {
        await firestore()
            .collection('students')
            .doc('0nwj80BIrUL8GYqZlTeZ')
            .delete()
            .then(() => {
                console.log('User deleted!');
            });
    }


    const updateStudent = async () => {
        await firestore()
            .collection('students')
            .doc('JdUy4QRW0RLKk3NuKpAt')
            .update({
                age: 31,
            })
            .then(() => {
                console.log('User updated!');
            });
    }

    const getAllFetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <NativeBaseProvider>
            <Center>
                <Container>
                    <Text fontSize="3xl" bold underline mt="15%" color="rose.800" ml="24%">Add Student</Text>
                    <Input variant="rounded" value={name} onChangeText={txt => setName(txt)} placeholder="Name" mt="20" mb="5%" />
                    <Input variant="rounded" value={age} onChangeText={txt => setAge(txt)} placeholder="Age" mb="5%" />
                    <Input variant="rounded" value={address} onChangeText={txt => setAddress(txt)} placeholder="Address" mb="5%" />
                    <Input variant="rounded" value={email} onChangeText={txt => setEmail(txt)} placeholder="Email" mb="5%" />
                    <Input variant="rounded" value={phone} onChangeText={txt => setPhone(txt)} placeholder="Phone" mb="5%" />
                    <Button size="sm" colorScheme="green" pl="10" pr="10" mt="10" ml="30%" onPress={saveStudent}>
                        Add Student
                    </Button>
                    <Button size="sm" colorScheme="red" pl="10" pr="10" mt="5" ml="30%" onPress={() => { navigation.navigate('LoadAll') }}>
                        View All Data
                    </Button>
                    <Button size="sm" colorScheme="red" pl="10" pr="10" mt="5" ml="30%" onPress={getAllFetchData}>
                        View Fetch Data
                    </Button>
                </Container>
            </Center>
        </NativeBaseProvider>
    )
}
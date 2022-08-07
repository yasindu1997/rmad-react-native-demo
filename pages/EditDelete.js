import React, { useState, useEffect } from 'react'
import { Center, Container, NativeBaseProvider, Text, Input, Button, Icon } from 'native-base'
import firestore from '@react-native-firebase/firestore';

export default function EditDelete({ navigation, route }) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setName(route.params.obj.name)
        setAddress(route.params.obj.address)
        setAge(route.params.obj.age)
        setEmail(route.params.obj.email)
        setPhone(route.params.obj.phone)

    }, [])

    const deleteStudent = async () => {
        await firestore()
            .collection('students')
            .doc(route.params.id)
            .delete()
            .then(() => {
                console.log('User deleted!');
            });
    }


    const updateStudent = async () => {
        await firestore()
            .collection('students')
            .doc(route.params.id)
            .update({
                name: name,
                age: age,
                address: address,
                phone: phone,
                email: email
            })
            .then(() => {
                console.log('User updated!');
            });
    }

    return (
        <NativeBaseProvider>
            <Center>
                <Container>
                    <Text fontSize="2xl" bold underline mt="15%" color="rose.800" ml="24%">Edit/Delete Student</Text>
                    <Input variant="rounded" value={name} onChangeText={txt => setName(txt)} placeholder="Name" mt="20" mb="5%" />
                    <Input variant="rounded" value={age} onChangeText={txt => setAge(txt)} placeholder="Age" mb="5%" />
                    <Input variant="rounded" value={address} onChangeText={txt => setAddress(txt)} placeholder="Address" mb="5%" />
                    <Input variant="rounded" value={email} onChangeText={txt => setEmail(txt)} placeholder="Email" mb="5%" />
                    <Input variant="rounded" value={phone} onChangeText={txt => setPhone(txt)} placeholder="Phone" mb="5%" />
                    <Button size="sm" colorScheme="red" pl="10" pr="10" mt="10" ml="30%" onPress={updateStudent}>
                        Edit Student
                    </Button>
                    <Button size="sm" colorScheme="yellow" pl="10" pr="10" mt="5" ml="30%" onPress={deleteStudent}>
                        Delete Student
                    </Button>
                </Container>
            </Center>
        </NativeBaseProvider>
    )
}
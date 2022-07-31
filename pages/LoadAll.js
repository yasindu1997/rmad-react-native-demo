import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';

export default function LoadAll() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const subscriber = firestore()
            .collection('students')
            .onSnapshot(querySnapshot => {
                const students = [];

                querySnapshot.forEach(documentSnapshot => {
                    students.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });

                setStudents(students);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    return (
        <View>
            <FlatList
                data={students}
                renderItem={({ item }) => (
                    <View style={{
                        height: 150, flex: 1, alignItems: 'center', justifyContent: 'center', borderColor: '#FF3D00',
                        borderWidth: 5, width: 400, marginLeft: '2%', marginBottom:'2%'

                    }}>
                        <Text>Name: {item.name}</Text>
                        <Text>Address: {item.address}</Text>
                        <Text>email: {item.email}</Text>
                        <Text>age: {item.age}</Text>
                        <Text>phone: {item.phone}</Text>
                    </View>
                )}
            />
        </View>
    )
}
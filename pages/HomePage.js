import React, { useEffect, useState } from "react";
import { View, TextInput, Image, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Input, NativeBaseProvider, Slider, Box, Text, VStack } from 'native-base';

function HomePage() {

    const [text, setText] = useState('');

    const getText = () => {
        console.log(text);
    }

    useEffect(() => {
        console.log("This is useEffect");
    }, [])

    return (
        <View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    main_view: {
        backgroundColor: 'red'
    },
    text_input: {
        width: '80%',
        borderColor: 'white',
        borderWidth: 1,
        marginLeft: '10%',
        marginTop: '5%',
        marginBottom: '5%'
    }
})

export default HomePage;
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

export default function Upload() {

    const [imagePath, setImagePth] = useState('');
    const [imageName, setImageName] = useState('');

    const getImage = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImagePth(image.path);
            setImageName(image.modificationDate);
            uploadImage();
        });
    }

    const uploadImage = async () => {
        const fileName = imageName + '.jpg';

        const reference = storage().ref(`/images/${fileName}`);
        await reference.putFile(imagePath)
            .then(async () => {
                const url = await storage().ref(`/images/${fileName}`).getDownloadURL();
                console.log(url);
            })
            .catch((err) => {
                console.error(err);
            });


    }

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: '15%', marginTop: '5%', marginLeft: '35%' }}>Upload File</Text>

            <Button onPress={getImage} title='Upload File' />
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/rmad-02.appspot.com/o/images%2F1659257132000.jpg?alt=media&token=d62a761f-38e6-4130-a677-b1e1973465d4',
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 150,
        height: 150,
    },
});

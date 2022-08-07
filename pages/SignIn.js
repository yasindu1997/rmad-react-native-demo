import React, { useState } from 'react'
import { Center, Container, NativeBaseProvider, Text, Input, Button, Icon } from 'native-base'
import { MaterialIcons } from '@native-base/icons';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { TouchableOpacity } from 'react-native';

GoogleSignin.configure({
    webClientId: '853590535141-qahddqaao0ds02g74jn1p9g01883mrfn.apps.googleusercontent.com',
});

export default function SignIn({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [show, setShow] = React.useState(false);

    const onGoogleButtonPress = async () => {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        auth().signInWithCredential(googleCredential).then((res) => {
            console.log(res)
        });

    }

    const login = async () => {
        auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                navigation.navigate('AddData')
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <NativeBaseProvider>
            <Center>
                <Container>
                    <Text fontSize="3xl" bold underline mt="35%" color="rose.800" ml="30%">Sign In</Text>
                    <Input variant="rounded" value={email} onChangeText={txt => setEmail(txt)} placeholder="Email" mt="20" mb="5%" />
                    <Input type={show ? "text" : "password"} variant="rounded" value={password}
                        onChangeText={txt => setPassword(txt)}
                        mb="5%"
                        InputRightElement={<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" onPress={() => setShow(!show)} />} placeholder="Password" />
                    <Button size="sm" colorScheme="green" pl="10" pr="10" mt="10" ml="30%" onPress={login}>
                        Sign In
                    </Button>
                    <GoogleSigninButton
                        style={{ width: 192, height: 60, marginLeft: 60 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={onGoogleButtonPress}
                    />;
                </Container>

                <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}><Text>Click To SignUp</Text></TouchableOpacity>
            </Center>
        </NativeBaseProvider>
    )
}
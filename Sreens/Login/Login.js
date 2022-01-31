import React from 'react';
import { View, Text,StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 

const Login = ({navigation}) => {
    const NavigationHandler = () => {
        navigation.navigate('RouteHome')
    }
  return (
    <ScrollView>
    <ImageBackground style={{
            width: 400,
            height: 800,
            }} resizeMode="cover" source={require('../../assets/image/loginbackground.jpg')}>
     
         <Image
        style={styles.images}
        source={require('../../assets/image/loginimg.jpg')} 
        />
        <View style={styles.logincontainer}>
            <Text style={styles.logintitle}>LOG-IN TO PICKTRAVEL</Text>

            <Text style={styles.regulartext}>Enter Your Email</Text>
            <TextInput style={styles.inputs} placeholder='Enter Your Email'/>

            <Text style={styles.regulartext}>Enter Your Pssword</Text>
            <TextInput secureTextEntry={true} style={styles.inputs} placeholder='Enter Your Pssword'/>

            <TouchableOpacity  onPress={NavigationHandler} style={styles.buttons}><Text style={styles.buttontext}>Log-In</Text></TouchableOpacity>

            <View style={styles.reglink}><Text style={styles.regulartext}>Don't Have You Account ?</Text><TouchableOpacity><Text style={styles.linktext}>sign-up</Text></TouchableOpacity></View>

            <TouchableOpacity style={styles.googlebtn}><Text style={styles.googletext}>Sign-in With Google</Text><AntDesign style={styles.icons} name="google" size={34} color="white" /></TouchableOpacity> 
        </View>

    </ImageBackground>
    </ScrollView>
  );
}

export default Login;
const styles = StyleSheet.create({
    images:{
        marginTop: 70,
        marginHorizontal: 100,
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    inputs:{
        borderBottomWidth: 2,
        borderBottomColor: '#99ccff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#99ccff'
    },
    logincontainer:{
        marginVertical: 30,
        marginHorizontal: 50,
    },
    logintitle:{
        fontSize: 25,
        textAlign: 'center', 
        marginBottom: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    buttons:{
        backgroundColor: '#00264d',
        height: 50,
        width: 200,
        marginHorizontal: 50,
        borderRadius: 25
    },
    buttontext:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 5
    },
    reglink:{
        display: 'flex',
        flexDirection:'row',
        marginHorizontal: 35,
        marginTop: 20
    },
    regulartext:{
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    linktext:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#0073e6',
        textDecorationLine: 'underline',
    },
    googlebtn:{
        backgroundColor: '#0040ff',
        width: 250,
        height: 60,
        marginHorizontal: 20,
        marginTop: 15,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 3,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    googletext:{
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 16
    },
    icons:{
        marginVertical: 7
    }
  });

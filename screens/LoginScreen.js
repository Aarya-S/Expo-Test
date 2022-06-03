import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import LoginBtn from "../components/LoginBtn";
import OrSeparator from "../components/OrSeparator";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function LoginScreen( {navigation} ) {
    return (
        <View style={styles.container}>
        <Text style={styles.appTitle}>App Name</Text>
        
        <View style={styles.inputArea}>
            <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#999"
            backgroundColor="#fff"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            backgroundColor="#fff"
            textContentType='password'
            secureTextEntry={true}
          />
        <LoginBtn title="LOGIN" onPress={() => navigation.navigate('Register')} />
        </View>
        <View style={styles.signupArea}>
          <OrSeparator />
        <LoginBtn title="SIGNUP FOR FREE" onPress={() => navigation.navigate('VerifyPhone')} />
        </View>


        
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e2d4b',
    maxHeight: '100%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontWeight: "300",
    fontFamily: "Roboto",
    fontSize: 50,
    marginBottom: "15%",
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    height: 60,
    marginBottom: 10,
    marginTop: 10,
    minWidth: '80%',
    borderRadius: 25,
    color: "black",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputArea: {
  
  },
  signupArea: {
    marginTop: 10,
  },
});
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import LoginBtn from "../components/LoginBtn";
import OrSeparator from "../components/OrSeparator";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from "../firebase";

export default function VerifyPhone( {navigation} ) {
    
    const [phone, setPhone] = useState("");
    const [otp, setOTP] = useState("");

    return (
        <View style={styles.container}>
        <Text style={styles.inputPrompt}>Enter your phone number</Text>
        <View style={styles.inputArea}>
            <TextInput
            style={styles.input}
            placeholder="Phone number"
            placeholderTextColor="#999"
            backgroundColor="#fff"
            keyboardType="numeric"
            onChangeText={text => setPhone(text)}
            />
            <LoginBtn title="Send OTP" onPress={getOtp(phone)} />
        </View>
        </View>
    );
}

function getOtp(phoneNumber) {

    if (phoneNumber.length == 10) {
        auth.signInWithPhoneNumber(phoneNumber)
        .then(confirmationResult => {
            console.log(confirmationResult);
        })
        .catch(error => {
            console.log(error);
        });
    }

}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#1e2d4b',
    maxHeight: '100%',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
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
  inputPrompt: {
    fontWeight: "300",
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#fff",
    marginBottom: "10%",
  }
});
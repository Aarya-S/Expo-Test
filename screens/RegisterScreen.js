import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert } from 'react-native';
import LoginBtn from '../components/LoginBtn';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Register</Text>
      <View style={styles.profileImage}>
        <Image source={require('../assets/icon.png')} style={styles.pfp} />
        <Text style={{color: 'white'}}>Profile Image</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#999"
              backgroundColor="#fff"
            />
        
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#999"
          backgroundColor="#fff"
        />
    </View>
    <View style={styles.emailContainer}>
        <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#999"
              backgroundColor="#fff"
        />
    </View>

    <View style={styles.inputContainer}>
        <TextInput
              style={styles.input}
              placeholder="Age"
              placeholderTextColor="#999"
              backgroundColor="#fff"
              keyboardType='numeric'
        />
        
        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          placeholderTextColor="#999"
          backgroundColor="#fff"
          editable={false}
        />
    </View>
    <View style={{marginTop: '8%'}}>
      <LoginBtn title={"Save Changes"} onPress={()=> {Alert.alert("Saved", "Your data has been saved")}} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1e2d4b',
        minHeight: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '15%',        
    },
    appTitle: {
        fontWeight: "300",
        fontFamily: "Roboto",
        fontSize: 50,
        marginBottom: "5%",
        color: "#fff",
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginBottom: '15%',
    },
    input: {
    borderWidth: 1,
    borderColor: '#000',
    height: 60,
    marginBottom: 10,
    marginTop: 10,
    minWidth: '43%',
    borderRadius: 25,
    color: "black",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '90%',
  },
  emailContainer : {
    minWidth: '90%',
  },
  profileImage: {
    width: 175,
    height: 175,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    marginBottom: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  pfp: {
    height: '100%',
    width: '100%',
    borderRadius: 175,
    marginBottom: '5%',
  }  
});
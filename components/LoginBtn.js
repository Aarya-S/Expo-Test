import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const LoginBtn = ({ onPress, title, }) => (
  <TouchableOpacity onPress={onPress} style={styles.loginBtnStyle}>
    <Text style={styles.loginButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    loginBtnStyle: {
        backgroundColor: '#e3627f',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 18,
        paddingBottom: 10,
        minWidth: "90%",
        marginTop: 10,
        width: '80%',
        marginBottom: 10,
        borderRadius: 25,
        height: 55,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default LoginBtn;
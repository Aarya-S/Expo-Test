import { View, StyleSheet, Text } from "react-native";

const OrSeparator = () => {
    return (
        <View style={styles.orSeparator}>
            <Text style={styles.orSeparatorText}>---------    OR    ---------</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    orSeparator: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    orSeparatorText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default OrSeparator;
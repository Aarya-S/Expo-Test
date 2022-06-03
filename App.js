import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import VerifyPhone from './screens/VerifyPhone';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}} />
          <Stack.Screen name='VerifyPhone' component={VerifyPhone} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}



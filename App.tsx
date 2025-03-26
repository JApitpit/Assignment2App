import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useState } from 'react';
import SignInForm from './app/sign-in'; 
import SignUpForm from './app/sign-up'; 
import LandingPage from './app/landingpage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator<RootStackParamList>();

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined; 
  LandingPage: undefined;
};


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInForm} />
        <Stack.Screen name="SignUp" component={SignUpForm} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    backgroundColor: '#f5f5f5',
  },
  button: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#4d5d53',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

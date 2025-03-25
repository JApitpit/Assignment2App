import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useState } from 'react';
import SignInForm from './app/sign-in'; 
import SignUpForm from './app/sign-up'; 

export default function App() {
  const [isSigningUp, setIsSigningUp] = useState(false);
  
  return (
    <View style={styles.container}>
      {isSigningUp ? <SignUpForm /> : <SignInForm />}
      
      <TouchableOpacity style={styles.button} onPress={() => setIsSigningUp(!isSigningUp)}>
        <Text style={styles.buttonText}>{isSigningUp ? 'Sign In' : 'Sign Up'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    backgroundColor: '#f5f5f5',
  },
  button: {
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

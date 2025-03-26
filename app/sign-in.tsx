import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../lib/supabase';
import { useNavigation } from '@react-navigation/native';
// const data = require("../credentials.json")

const SignInForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // const [passwordError, setPasswordError] = useState<string | null>(null);
  
  const handleSignIn = async (): Promise<void> => {
    if (loading) {return;};
    if (!email || !password) {
      Alert.alert('Error', 'Email and password are required.');
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert('Sign In Failed', error.message);
      setLoading(false);
      return;
    }

    Alert.alert('Success', 'You are now signed in!');
    setLoading(false);
    navigation.navigate("LandingPage");
  };

  
  //const handleSignIn = (): void => {
    // const isPasswordValid = validatePassword(password);

    // const signIn = validateSignIn();

    // if (signIn) {
    //   Alert.alert(
    //     'Hey fren', 
    //     'We searched our database, you are like, positively logged in bro!', 
    //     [
    //       {
    //         text: 'Close', 
    //       },
    //     ]
    //   );
    // } else {
    //   Alert.alert(
    //     'BIG OOF LMAO', 
    //     'Yeah... that is like not an actual account lmfao. maybe,,, try again???', 
    //     [
    //       {
    //         text: 'Close', 
    //       },
    //     ]
    //   );
    // }

  //};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Pleasee</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />


      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#dce3c7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4d5d53',
  },
  input: {
    height: 40,
    borderColor: '#99a98f',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
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

export default SignInForm;

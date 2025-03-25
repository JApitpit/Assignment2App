import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../lib/supabase';
import { insertUser } from '../lib/supabase_crud';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (): Promise<void> => {
    if (!email || !password || !firstName || !lastName) {
      Alert.alert('Error', 'All fields are required');
      return;
    };

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    
  if (error) {
    Alert.alert('Sign Up Failed', error.message);
    return;
  }

  const userId = data.user?.id;
  if (!userId) {
    Alert.alert('Error', 'User ID missing');
    return;
  }

  // Insert additional user details into custom "users" table
  const { error: insertError } = await insertUser({
    email: email,
    firstName: firstName,
    lastName: lastName,

  });

  if (insertError) {
    Alert.alert('Error', insertError);
    return;
  }

  Alert.alert('Success', 'Account created successfully!');

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Pleasee</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} onPress={handleSubmit}>Sign Up</Text>
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

export default SignUpForm;
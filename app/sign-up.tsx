import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../lib/supabase';
import { insertUser } from '../lib/supabase_crud';
import { useNavigation } from '@react-navigation/native';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async (): Promise<void> => {
    if (loading) {return};

    if (!email || !password || !firstName || !lastName) {
      Alert.alert('Error', 'All fields are required');
      return;
    };

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    
  if (error) {
    Alert.alert('Sign Up Failed', error.message);
    setLoading(false);
    return;
  }

  const userId = data.user?.id;
  if (!userId) {
    Alert.alert('Error', 'User ID missing');
    setLoading(false);
    return;
  }

  const { error: insertError } = await supabase
          .from('user_details')
          .insert([
            {
              uuid: userId, // Supabase user ID
              email: email,
              first_name: firstName,
              last_name: lastName,
            },
          ]);

  if (insertError) {
    Alert.alert('Error', insertError.message);
    setLoading(false);
    return;
  }

  Alert.alert('Success', 'Account created successfully!');
  setLoading(false);
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

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Have an account? Sign in</Text>
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

export default SignUpForm;
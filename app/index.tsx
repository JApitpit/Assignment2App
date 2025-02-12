import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const data = require("../credentials.json");

export default function SignInForm() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateUsername = (text: string): boolean => {
    if (text.length < 5) {
      setUsernameError('Username must be at least 5 characters long.');
      return false;
    }
    setUsernameError(null);
    return true;
  };

  const validatePassword = (text: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(text)) {
      setPasswordError('Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.');
      return false;
    }
    setPasswordError(null);
    return true;
  };

  function validateSignIn(): boolean {
    for (const user of data.users) {
      if (user.username == username && user.password == password) {
        return true;
      }
    }
    return false;
  } 

  const handleSignIn = (): void => {
    if (validateUsername(username) && validatePassword(password) && validateSignIn()) {
      router.push('/home');
    } else {
      Alert.alert('Error', 'Invalid username or password. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => { setUsername(text); validateUsername(text); }}
      />
      {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => { setPassword(text); validatePassword(text); }}
        secureTextEntry
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}


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
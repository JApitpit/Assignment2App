import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateUsername = (text: string): boolean => {
    if (text === '') {
      setUsernameError(null);  
      return false;
    } else if (text.length < 5) {
      setUsernameError('Username unacceptable. Rewrite with at least 5 letters.');
      return false;
    } else {
      setUsernameError(null);
      return true;
    }
  };
  

  const validatePassword = (text: string): boolean => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (text === '') {
      setPasswordError(null);
      return false;
    }
    else if (!passwordRegex.test(text)) {
      setPasswordError(
        'Password must have: \n   At least 8 characters \n   One uppercase letter \n   One lowercase letter \n   One number \n   One special character'
      );
      return false;
    } else {
      setPasswordError(null);
      return true;
    }
  };

  const handleSignIn = (): void => {
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    //
    if (isUsernameValid && isPasswordValid) {
    } else {
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Bro, Hurry</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => {
          setUsername(text);
          validateUsername(text);
        }}
      />
      {usernameError && <Text style={styles.errorText}>{usernameError}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          validatePassword(text);
        }}
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
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

export default SignInForm;

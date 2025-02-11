import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignInForm from './app/sign-in'; 


export default function App() {
  return (
    <View style={styles.container}>
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    backgroundColor: '#f5f5f5',
  },
});

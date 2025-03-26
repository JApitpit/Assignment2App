

import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {

    const navigation = useNavigation()

    return(
        <View>
            <Text style={styles.title}>Kill yourself I ahte you RFUCK YOU SO HARD ASSHOEL</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignIn")}>GO TO HOME</TouchableOpacity>
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


export default LandingPage
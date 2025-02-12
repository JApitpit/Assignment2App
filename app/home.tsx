import { Tabs } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My New App!</Text>
        <Tabs>
        <Tabs.Screen name="city" options={{ title: "Calgary" }} initialParams={{ city: 'Calgary' }} />
        <Tabs.Screen name="city" options={{ title: "Edmonton" }} initialParams={{ city: 'Edmonton' }} />
        </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

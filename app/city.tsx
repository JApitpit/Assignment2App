import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import CityInfo from '../components/CityInfo';
import CityLink from '../components/CityLink';

const cityData = {
  Calgary: {
    image: require('../assets/calgary.jpg'),
    link: "https://www.calgary.ca/home.html",
    info: "Calgary is known for the Calgary Stampede and beautiful Rocky Mountain views."
  },
  Edmonton: {
    image: require('../assets/edmonton.jpg'),
    link: "https://www.edmonton.ca/",
    info: "Edmonton is home to the largest mall in North America and the stunning River Valley."
  }
};

export default function CityScreen() {
  const { city } = useLocalSearchParams();

  const cityKey = city as keyof typeof cityData;

  const { image, link, info } = cityData[cityKey];

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <CityInfo info={info} />
      <CityLink link={link} city={cityKey} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  image: { width: 300, height: 200, marginBottom: 10 },
});
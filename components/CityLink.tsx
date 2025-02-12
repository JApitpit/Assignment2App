import { Text, TouchableOpacity, Linking } from 'react-native';

interface CityLinkProps {
  link: string;
  city: string;
}

export default function CityLink({ link, city }: CityLinkProps) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <Text style={{ color: 'blue', marginTop: 10 }}>Go to {city} page</Text>
    </TouchableOpacity>
  );
}

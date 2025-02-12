import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

interface CityInfoProps {
  info: string;
}

export default function CityInfo({ info }: CityInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{info}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  text: { fontSize: 16, textAlign: 'center' },
});

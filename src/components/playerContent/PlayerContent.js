import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function PlayerContent() {
  return (
    <View style={styles.contentScore}>
      <View></View>
      <Text></Text>
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  contentScore: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'orange',
  },
});

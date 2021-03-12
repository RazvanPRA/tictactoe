import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function PlayerContent({numberOfWinsX, numberOfWins0}) {
  return (
    <View style={styles.contentScore}>
      <Text style={styles.contentPlayer}>X</Text>
      <View style={styles.gameScore}>
        <Text style={styles.contentGameScore}>Score:</Text>
        <Text style={styles.contentGameScore}>
          {numberOfWinsX} - {numberOfWins0}
        </Text>
      </View>
      <Text style={styles.contentPlayer}>0</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  contentScore: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentPlayer: {
    flex: 3,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#F8B400',
  },
  gameScore: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentGameScore: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E9E9E9',
  },
});

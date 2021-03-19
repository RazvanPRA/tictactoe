import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

export default function PlayerContent({numberOfWinsX, numberOfWins0}) {
  return (
    <View style={styles.contentScore}>
      <Text style={styles.contentInerTextGameScore}>Score</Text>
      <View style={styles.content}>
        <Text style={styles.contentPlayer}>
          <Feather name="x" style={styles.x} />
        </Text>
        <Text style={styles.contentGameScore}>
          {numberOfWinsX} - {numberOfWins0}
        </Text>
        <Text style={styles.contentPlayer}>
          <Entypo name="circle" style={styles.zero} />
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contentScore: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentPlayer: {
    flex: 1,
    textAlign: 'center',
    color: '#F8B400',
  },
  gameScore: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentInerTextGameScore: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E9E9E9',
  },
  contentGameScore: {
    flex: 1,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#E9E9E9',
    textAlign: 'center',
  },
  zero: {
    fontSize: 50,
  },
  x: {
    fontSize: 60,
  },
});

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Header({playerTurn, gameOver, isDraw}) {
  return (
    <View style={styles.header}>
      {isDraw && <Text style={styles.textHeader}>Draw!</Text>}
      {!isDraw && <Text style={styles.textHeader}>Next Move: X</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    borderWidth: 2,
    borderColor: `#ff0000`,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#E9E9E9',
    fontSize: 25,
  },
});

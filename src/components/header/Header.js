import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Header({playerTurn, gameOver, isDraw, tableValues}) {
  return (
    <View style={styles.header}>
      {isDraw && <Text style={styles.textHeader}>Draw!</Text>}
      {!isDraw && !gameOver && (
        <Text style={styles.textHeader}>
          Next Move: {playerTurn === 'X' ? 'X' : '0'}
        </Text>
      )}
      {gameOver && (
        <Text style={styles.textHeader}>
          Winner: {playerTurn === '0' ? 'X' : '0'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    borderColor: `#ff0000`,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textHeader: {
    color: '#E9E9E9',
    fontSize: 25,
  },
});

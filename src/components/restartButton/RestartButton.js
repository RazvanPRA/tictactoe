import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function RestartButton({
  setTableValues,
  setPlayerTurn,
  setGameOver,
  gameOver,
  setIsDraw,
  setWinningSquares,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setTableValues(['', '', '', '', '', '', '', '', '']);
        setPlayerTurn('X');
        setGameOver(false);
        setIsDraw(false);
        setWinningSquares([]);
      }}
      style={styles.button}>
      <Text style={[styles.bInnerText]}>
        {gameOver === true ? 'Play Again?' : 'Restart'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    color: 'red',
    backgroundColor: '#127681',
    width: 200,
    padding: '1%',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bInnerText: {
    fontSize: 25,
    color: '#E9E9E9',
    fontWeight: 'bold',
  },
});

import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

export default function Square({
  squareValue,
  playerTurn,
  setPlayerTurn,
  setTableValues,
  tableValues,
  index,
  gameOver,
  winningSquares,
}) {
  const isWinner = winningSquares.indexOf(index) !== -1;
  return (
    <Pressable
      style={styles.squareContainer}
      onPress={() => {
        if (gameOver === false && tableValues[index] === '') {
          let newTableValues = [...tableValues];
          newTableValues[index] = playerTurn;
          setTableValues(newTableValues);
          setPlayerTurn(playerTurn === 'X' ? '0' : 'X');
        }
      }}>
      <Text style={[styles.squareValues, isWinner && styles.winningSquare]}>
        {squareValue}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  squareContainer: {
    backgroundColor: '#127681',
    margin: 10,
    borderRadius: 25,
    width: 95,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareValues: {
    fontSize: 60,
    color: '#F8B400',
  },
  winningSquare: {
    color: '#47D93B',
  },
});

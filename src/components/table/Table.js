import React from 'react';
import {View, StyleSheet} from 'react-native';
import Square from './square/Square';

export default function Table({
  tableValues,
  setTableValues,
  playerTurn,
  setPlayerTurn,
  gameOver,
  winningSquares,
}) {
  return (
    <View style={styles.contentBorder}>
      {tableValues.map((item, index) => (
        <Square
          key={index}
          tableValues={tableValues}
          setTableValues={setTableValues}
          squareValue={item}
          index={index}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          gameOver={gameOver}
          winningSquares={winningSquares}></Square>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  contentBorder: {
    flex: 5,
    flexDirection: 'row',
    borderColor: 'blue',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function RestartButton({
  setTableValues,
  setPlayerTurn,
  setGameOver,
  gameOver,
  setIsDraw,
}) {
  return (
    <View style={styles.vButton}>
      <TouchableOpacity
        onPress={() => {
          setTableValues(['', '', '', '', '', '', '', '', '']);
          setPlayerTurn('X');
          setGameOver(false);
          setIsDraw(false);
        }}
        style={styles.button}>
        <Text style={[styles.bInnerText]}>
          {gameOver === true ? 'Play Again?' : 'Restart'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  vButton: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  button: {
    color: 'red',
    backgroundColor: '#127681',
    width: 200,
    padding: '1%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  bInnerText: {
    textAlign: 'center',
    fontSize: 25,
    color: '#E9E9E9',
  },
});

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TemplateIcon from '../template/TemplateIcon';

export default function Header({playerTurn, gameOver, isDraw}) {
  return (
    <View style={styles.header}>
      {!gameOver && isDraw && <Text style={styles.textHeader}>Draw!</Text>}
      {!isDraw && !gameOver && (
        <View style={styles.texTHeader}>
          <Text style={styles.textHeader}>Next Move:</Text>
          <TemplateIcon
            iconValue={playerTurn === 'X' ? 'X' : '0'}></TemplateIcon>
        </View>
      )}
      {gameOver && (
        <View style={styles.texTHeader}>
          <Text style={styles.textHeader}>Winner:</Text>
          <TemplateIcon
            iconValue={playerTurn === '0' ? 'X' : '0'}></TemplateIcon>
        </View>
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
    fontWeight: 'bold',
  },
  texTHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

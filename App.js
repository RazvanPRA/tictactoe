/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './src/components/header/Header';
import Table from './src/components/table/Table';
import RestartButton from './src/components/restartButton/RestartButton';
import PlayerContent from './src/components/playerContent/PlayerContent';

const App: () => React$Node = () => {
  const [tableValues, setTableValues] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const [playerTurn, setPlayerTurn] = useState('X');
  const [numberOfWinsX, setNumberOfWinsX] = useState(0);
  const [numberOfWins0, setNumberOfWins0] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    if (
      tableValues[0] === tableValues[1] &&
      tableValues[1] === tableValues[2] &&
      tableValues[1] !== ''
    ) {
      if (tableValues[0] === 'X') {
        setNumberOfWinsX(numberOfWinsX + 1);
        setGameOver(!gameOver);
      } else if (tableValues[0] === '0') {
        setNumberOfWins0(numberOfWins0 + 1);
        setGameOver(!gameOver);
      }
    }
    if (
      tableValues[3] === tableValues[4] &&
      tableValues[4] === tableValues[5] &&
      tableValues[4] !== ''
    ) {
      if (tableValues[3] === 'X') {
        setNumberOfWinsX(numberOfWinsX + 1);
        setGameOver(!gameOver);
      } else if (tableValues[3] === '0') {
        setNumberOfWins0(numberOfWins0 + 1);
        setGameOver(!gameOver);
      }
    }
    if (
      tableValues[6] === tableValues[7] &&
      tableValues[7] === tableValues[8] &&
      tableValues[7] !== ''
    ) {
      if (tableValues[6] === 'X') {
        setNumberOfWinsX(numberOfWinsX + 1);
        setGameOver(!gameOver);
      } else if (tableValues[6] === '0') {
        setNumberOfWins0(numberOfWins0 + 1);
        setGameOver(!gameOver);
      }
    }
    if (
      tableValues[0] === tableValues[3] &&
      tableValues[3] === tableValues[6] &&
      tableValues[3] !== ''
    ) {
      if (tableValues[0] === 'X') {
        setNumberOfWinsX(numberOfWinsX + 1);
        setGameOver(!gameOver);
      } else if (tableValues[0] === '0') {
        setNumberOfWins0(numberOfWins0 + 1);
        setGameOver(!gameOver);
      }
    }
    if (
      tableValues[1] === tableValues[4] &&
      tableValues[4] === tableValues[7] &&
      tableValues[4] !== ''
    ) {
      if (tableValues[1] === 'X') {
        setNumberOfWinsX(numberOfWinsX + 1);
        setGameOver(!gameOver);
      } else if (tableValues[1] === '0') {
        setNumberOfWins0(numberOfWins0 + 1);
        setGameOver(!gameOver);
      }
    }
    if (
      tableValues[2] === tableValues[5] &&
      tableValues[5] === tableValues[8] &&
      tableValues[5] !== ''
    ) {
      if (tableValues[2] === 'X') {
        setNumberOfWinsX(numberOfWinsX + 1);
        setGameOver(!gameOver);
      } else if (tableValues[2] === '0') {
        setNumberOfWins0(numberOfWins0 + 1);
        setGameOver(!gameOver);
      }
    }
    if (
      tableValues[0] === tableValues[4] &&
      tableValues[4] === tableValues[8] &&
      tableValues[4] !== ''
    ) {
      if (tableValues[0] === 'X') {
        setNumberOfWinsX(numberOfWinsX + 1);
        setGameOver(!gameOver);
      } else if (tableValues[0] === '0') {
        setNumberOfWins0(numberOfWins0 + 1);
        setGameOver(!gameOver);
      }
    }
    if (
      tableValues[2] === tableValues[4] &&
      tableValues[4] === tableValues[6] &&
      tableValues[4] !== ''
    ) {
      if (tableValues[2] === 'X') {
        setNumberOfWinsX(numberOfWinsX + 1);
        setGameOver(!gameOver);
      } else if (tableValues[2] === '0') {
        setNumberOfWins0(numberOfWins0 + 1);
        setGameOver(!gameOver);
      }
    }
  }, [tableValues]);

  useEffect(() => {
    if (gameOver === false && tableValues.indexOf('') === -1) {
      setIsDraw(true);
    }
  }, [tableValues, gameOver]);
  return (
    <>
      <View style={styles.body}>
        <Header
          isDraw={isDraw}
          gameOver={gameOver}
          playerTurn={playerTurn}
          tableValues={tableValues}></Header>
        <Table
          tableValues={tableValues}
          setTableValues={setTableValues}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          gameOver={gameOver}></Table>
        <PlayerContent
          numberOfWinsX={numberOfWinsX}
          numberOfWins0={numberOfWins0}></PlayerContent>
        <RestartButton
          setTableValues={setTableValues}
          setPlayerTurn={setPlayerTurn}
          setGameOver={setGameOver}
          gameOver={gameOver}
          setIsDraw={setIsDraw}></RestartButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#10375C',
  },
});

export default App;

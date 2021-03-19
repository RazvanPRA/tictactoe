import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const TemplateIcon = ({iconValue, isWinner}) => {
  return (
    <View>
      {iconValue === 'X' && (
        <Feather
          name="x"
          style={[styles.iconX, isWinner && styles.winningSquare]}
        />
      )}
      {iconValue === '0' && (
        <Entypo
          name="circle"
          style={[styles.iconO, isWinner && styles.winningSquare]}
        />
      )}
    </View>
  );
};

export default TemplateIcon;

const styles = StyleSheet.create({
  iconO: {
    fontSize: 60,
    color: '#F8B400',
  },
  iconX: {
    fontSize: 66,
    color: '#F8B400',
  },
  winningSquare: {
    color: '#47D93B',
  },
});

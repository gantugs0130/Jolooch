import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import CorrectSvg from '../../assets/svg/correct.svg';
import IncorrectSvg from '../../assets/svg/inCorrect.svg';

const AnswerItem = ({
  setAnswered,
  index,
  isCorrect,
  isAnswered,
  answer,
  answeredId,
  intIndex,
}) => {
  function indexToString(index) {
    switch (index) {
      case 0:
        return 'А.';
      case 1:
        return 'Б.';
      case 2:
        return 'В.';
      case 3:
        return 'Г.';
      case 4:
        return 'Д.';
      case 5:
        return 'Е.';
    }
    return ' .';
  }

  return (
    <TouchableOpacity
      onPress={() => !isAnswered && setAnswered(answer.id)}
      activeOpacity={0.6}
      style={{
        ...styles.wrapper,
        borderColor:
          isAnswered && isCorrect
            ? Colors.green
            : answer.id === answeredId
            ? Colors.red2
            : '#E8E8E8',
      }}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <Text style={{...styles.font18, paddingRight: 12}}>
          {intIndex ? intIndex + '.' : indexToString(index)}
        </Text>
        <Text
          numberOfLines={3}
          style={{
            ...styles.font12,
            textAlign: 'justify',
            flex: 1,
            paddingRight: 8,
          }}>
          {answer?.answer}
        </Text>
      </View>
      {isAnswered &&
        (isCorrect ? (
          <CorrectSvg />
        ) : (
          answer.id === answeredId && <IncorrectSvg />
        ))}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E8E8E8',
    height: 78,
    marginVertical: 3,
    paddingVertical: 0,
    paddingHorizontal: 12,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  font12: {
    color: Colors.black55,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
  },
  font18: {
    color: Colors.black85,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
  },
});
export default AnswerItem;

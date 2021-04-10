import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import AnswerItem from '../components/AnswerItem';

const ExamDetailScreen = ({route, navigation}) => {
  const {answers} = route.params;
  return (
    <View style={{flex: 1}}>
      <ScrollView style={styles.wrapper}>
        {answers.map((an, ind) => {
          return (
            an?.answered && (
              <AnswerItem
                key={ind + an.id}
                answer={
                  an.answers.find(a => {
                    return a.id === an.answeredId;
                  }) || an.answers[0]
                }
                answeredId={an.answeredId}
                isCorrect={an.answeredId === an.correct.answer_id}
                isAnswered={!!an?.answered}
                index={an.answers.findIndex(a => {
                  let aa = an.answers.find(b => {
                    return b.id === an.answeredId;
                  });
                  return a.id === aa?.id;
                })}
                intIndex={ind + 1}
              />
            )
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 24,
    position: 'relative',
  },
  font24Bold: {
    color: Colors.black100,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
  },
  font18: {
    color: Colors.black70,
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 22,
  },
  font14: {
    color: Colors.white,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
  },
});
export default ExamDetailScreen;

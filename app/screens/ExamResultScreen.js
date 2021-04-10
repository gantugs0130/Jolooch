import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';

const ExamResultScreen = ({route, navigation}) => {
  const {resultInfo, answers} = route.params;
  useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        if (e.data.action.type === 'POP') {
          navigation.dispatch(e.data.action);
          // invoiceDecline(checkoutInfo?.checkoutId);
        }
        e.preventDefault();
      }),
    [navigation],
  );
  return (
    <View style={styles.wrapper}>
      <Text style={{...styles.font14, color: Colors.black55, marginBottom: 45}}>
        Шалгалтын хариу
      </Text>
      <AnimatedCircularProgress
        duration={1000}
        size={200}
        width={20}
        fill={(resultInfo.correctCount / resultInfo.totalAnswer) * 100}
        tintColor={
          resultInfo.totalAnswer - resultInfo.correctCount > 2
            ? Colors.red2
            : Colors.default.success
        }
        backgroundColor={Colors.black10}
        rotation={235}
        renderCap={({center}) => (
          <Circle
            cx={center.x}
            cy={center.y}
            r="10"
            fill={
              resultInfo.totalAnswer - resultInfo.correctCount > 2
                ? Colors.red2
                : Colors.default.success
            }
          />
        )}
        lineCap={'round'}>
        {fill => (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.font24Bold}>
              {resultInfo.correctCount + '/' + resultInfo.totalAnswer}
            </Text>
            <Text style={styles.font10}>Зөв хариулсан</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View
        style={{
          marginTop: 45,
          flex: 1,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{...styles.font24Bold, textAlign: 'left', marginBottom: 8}}>
            {resultInfo.correctCount < 18 ? 'УНАЛАА' : 'ТЭНЦСЭН'}
          </Text>
          {resultInfo.correctCount < 18 ? (
            <Text style={{...styles.font14, color: Colors.black85}}>
              Өө, уучлаарай та{' '}
              {resultInfo.totalAnswer - resultInfo.correctCount + ' '}
              асуулт буруу хариулж шалгалтанд уналаа. Дараагийн удаад амжилт
              хүсье!
            </Text>
          ) : (
            <Text style={{...styles.font14, color: Colors.black85}}>
              Таньд баяр хүргэе {resultInfo.correctCount + ' '}
              асуултанд хариулж шалгалтанд тэнцлээ. Амжилт хүсье!
            </Text>
          )}
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ExamDetailScreen', {answers: answers});
              }}
              style={{
                width: '48%',
                height: 48,
                alignItems: 'center',
                borderRadius: 15,
                borderWidth: 1,
                justifyContent: 'center',
                borderColor: '#E8E8E8',
              }}>
              <Text style={{...styles.font14, color: Colors.black85}}>
                Хариу харах
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.pop(2);
              }}
              style={{
                width: '48%',
                height: 48,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FF3131',
                borderRadius: 15,
              }}>
              <Text style={styles.font14}>Дахин эхлэх</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.pop(3);
            }}
            style={{
              width: '100%',
              height: 48,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1360D3',
              borderRadius: 15,
              marginTop: 10,
            }}>
            <Text style={styles.font14}>ДУУСГАХ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
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
  font10: {
    color: Colors.black55,
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 12,
  },
});
export default ExamResultScreen;

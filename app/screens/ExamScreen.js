import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import Colors from '../constants/Colors';
import AnswerItem from '../components/AnswerItem';
import Carousel from 'react-native-snap-carousel';

const baseImgUrl = '../../assets/';
const test = require('../constants/test.json');
const testC = require('../constants/cd_test.json');
const correct = require('../constants/correct.json');
const correctC = require('../constants/cd_correct.json');
const answer = require('../constants/answer.json');
const answerC = require('../constants/cd_answer.json');

const ExamScreen = ({route, navigation}) => {
  const {carType} = route.params;
  const [data, setData] = useState({
    test: [],
  });
  const [resultInfo, setResultInfo] = useState({
    current: 0,
    correctCount: 0,
    answeredCount: 0,
    totalAnswer: 20,
    isDone: false,
    timer: 1200,
  });

  async function initData() {
    let tempArray = [];
    for (let i = 0; i < 20; ) {
      let item =
        carType === 0
          ? test[Math.floor(Math.random() * test.length)]
          : testC[Math.floor(Math.random() * testC.length)];
      item.answered = false;
      item.answeredId = null;

      if (!tempArray.includes(item)) {
        item.answers =
          carType === 0
            ? answer.filter(a => {
                return a.test_id === item.id;
              })
            : answerC.filter(a => {
                return a.test_id === item.id;
              });
        item.correct =
          carType === 0
            ? correct.find(c => {
                return c.test_id === item.id;
              })
            : correctC.find(c => {
                return c.test_id === item.id;
              });
        tempArray.push(item);
      }
      i++;
    }
    setData({test: tempArray});
  }

  useEffect(() => {
    initData();
  }, [test, testC]);
  useEffect(() => {
    if (resultInfo.isDone) {
      setResultInfo({
        current: 0,
        correctCount: 0,
        answeredCount: 0,
        totalAnswer: 20,
        isDone: false,
        timer: 1200,
      });
      initData();
    }
  }, [resultInfo.isDone]);
  const _renderItem = ({item, index}) => {
    const imageUrl = baseImgUrl + item?.images;
    // console.log(imageUrl, item?.images, !!item?.images);
    if (item) {
      return (
        <ScrollView
          key={new Date().getTime() + index}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginRight: 24}}>
          <View>
            <Text>{item.images}0f227e5854016f294a10490def4621f9</Text>
            {!!item.images && (
              <Image
                source={{uri: item.images}}
                style={{width: 40, height: 40}}
              />
            )}
          </View>
          <Text style={{...styles.font18, paddingTop: 8, paddingBottom: 12}}>
            {item?.questions}
          </Text>
          {item.answers &&
            item.answers.map((answer, i) => (
              <AnswerItem
                key={new Date().getTime() + answer.test_id + ' ' + i}
                setAnswered={setAnswered}
                index={i}
                answer={answer}
                isAnswered={item.answered}
                isCorrect={answer.id === item?.correct?.answer_id}
                answeredId={item.answeredId}
              />
            ))}
        </ScrollView>
      );
    } else {
      return <></>;
    }
  };
  const windowWidth = Dimensions.get('window').width;

  function setAnswered(answeredId) {
    let tempTest = data.test;
    tempTest[resultInfo.current].answeredId = answeredId;
    tempTest[resultInfo.current].answered = true;
    let isCorrect =
      tempTest[resultInfo.current].correct?.answer_id === answeredId;
    setData({
      ...data,
      test: tempTest,
    });
    setResultInfo({
      ...resultInfo,
      correctCount: isCorrect
        ? ++resultInfo.correctCount
        : resultInfo.correctCount,
      answeredCount: ++resultInfo.answeredCount,
    });
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setResultInfo({...resultInfo, isDone: true});
            navigation.navigate('ExamResultScreen', {
              resultInfo: resultInfo,
              answers: data.test,
            });
          }}>
          <Text style={{...styles.font14, color: Colors.blue}}>Дуусгах</Text>
        </TouchableOpacity>
        <View>
          <Text style={{...styles.font14, marginBottom: -4}}>
            Үлдсэн хугацаа
          </Text>
          <CountDown
            until={resultInfo.timer}
            size={24}
            onFinish={() => {
              if (!resultInfo.isDone) {
                setResultInfo({...resultInfo, isDone: true});
                navigation.navigate('ExamResultScreen', {
                  resultInfo: resultInfo,
                  answers: data.test,
                });
              }
            }}
            digitStyle={{
              height: 26,
              width: 32,
              marginHorizontal: 0,
            }}
            separatorStyle={{
              color: Colors.black85,
              fontSize: 24,
              lineHeight: 28,
            }}
            digitTxtStyle={{
              color: Colors.black85,
              fontSize: 24,
              lineHeight: 28,
            }}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{...styles.font14, color: Colors.blue}}>
            {resultInfo.current + 1}
          </Text>
          <Text style={{...styles.font14, color: Colors.black85}}>
            /{resultInfo.totalAnswer}
          </Text>
        </View>
      </View>
      <Carousel
        ref={c => {}}
        data={data.test}
        renderItem={_renderItem}
        sliderWidth={windowWidth - 24}
        itemWidth={windowWidth - 24}
        activeSlideAlignment={'start'}
        onSnapToItem={index => setResultInfo({...resultInfo, current: index})}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    padding: 24,
    backgroundColor: Colors.white,
    flex: 1,
  },
  font14: {
    color: Colors.black55,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
  },
  font18: {
    color: Colors.black85,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 22,
  },
});
export default ExamScreen;

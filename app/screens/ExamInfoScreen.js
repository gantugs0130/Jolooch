import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../constants/Colors';
import NextSvgWhite from '../../assets/svg/nextWhite.svg';

const ExamInfoScreen = ({route, navigation}) => {
  const {carType} = route.params;
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ExamScreen', {carType: carType});
        }}
        activeOpacity={1}
        style={{
          position: 'absolute',
          bottom: 12,
          flexDirection: 'row',
          height: 48,
          backgroundColor: Colors.blue,
          width: '100%',
          left: 24,
          borderRadius: 5,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
          zIndex: 1,
        }}>
        <Text />
        <Text style={styles.font14}>Эхлэх</Text>
        <NextSvgWhite />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <Text style={styles.font24Bold}>ШАЛГАЛТ</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{paddingRight: 16, justifyContent: 'center'}}>
              <Text
                style={{
                  ...styles.font24Bold,
                  fontWeight: '500',
                  color: Colors.black55,
                  textAlign: 'center',
                }}>
                20
              </Text>
              <Text
                style={{
                  ...styles.font14,
                  fontWeight: '400',
                  color: Colors.black55,
                  textAlign: 'center',
                }}>
                Асуулт
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...styles.font24Bold,
                  fontWeight: '500',
                  color: Colors.black55,
                  textAlign: 'center',
                }}>
                20
              </Text>
              <Text
                style={{
                  ...styles.font14,
                  fontWeight: '400',
                  color: Colors.black55,
                  textAlign: 'center',
                }}>
                Минут
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={{...styles.font18, textAlign: 'justify', paddingBottom: 64}}>
          Энэхүү тестийн апп нь жолооны дамжаанд сурч байгаа болон сурах гэж
          байгаа хүмүүст шалгалтандаа бэлдэхэд туслах зорилгоор бүтгдсэн болно.
          Та доорх 3 төрлөөс сонгон бэлдэх боломжтой. Санэхүү тестийн апп нь
          жолооны дамжаанд сурч байгаа болон сурах байгаа хүмүүст шалгалтандаа
          бэд туслах зорилгоор бүтээгдсэн болно. Та доорх 3 төрлөөс сонгон
          бэлдэх боломжтой. Санамж: Энэхүү тестийн апп нь жолооны дамч байгаа
          болон сурах гэж байгаа д туслах зорилгоор бүтээгдолно. Та доорх 3
          төрлөөс сонгон бэлдэх боломжтой. Санамж: Энэхүү тестийн апп нь жолооны
          дамжаанд сурч байгаа болон сурах гйгаа хүмүүст шалгалтандаа бэлдэхэд
          туслах зорилгоор бүтээгдсэн болно. Та доорх 3 төрлөөс сонгон бэлдэх
          боломжтой. Санамж: Энэхүү тестийн апп нь жолооны дамжаанд сурч байгаа
          болон сурах гэж байгаа хүмүүст шалгалтандаа бэлдэхэд туслах зорилгоор
          бүтээгдсэн болно. Та доорх 3 төрлөөс сонгон бэлдэх боломжтой. Санамж:
          Энэхүү тестийн апп нь жолооны дамжаанд сурч байгаа болон сурах гэж
          байгаа хүмүүст шалгалтандаа бэлдэхэд туслах зорилгоор бүтээгдсэн
          болно. Та доорх 3 төрлөөс сонгон бэлдэх боломжтой. Санамж:
        </Text>
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
export default ExamInfoScreen;

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Colors from '../constants/Colors';
import NextSvg from '../../assets/svg/next.svg';
import Carousel from 'react-native-snap-carousel';
import SelectModal from '../components/SelectModal';

const HomeScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectData, setSelectData] = useState({
    selectedSection: 0,
    selectedCarType: 0,
  });
  function closeModal(carType) {
    setSelectData({...selectData, selectedCarType: carType});
    setIsModalVisible(false);
    navigation.navigate('ExamInfoScreen', {carType: carType});
  }
  const sliderData = [
    {
      title:
        'Жишиг тест нь 20 асуултаас бүрдэх бөгөөд жинхэн шалгалтаас өөрцгүй юм.',
      image:
        'https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg',
    },
    {
      title: 'Өөрийн зорьж буй ангилал дээр тааруулан сэдэв сонгох боломжтой. ',
      image:
        'https://www.cnet.com/a/img/-e95qclc6pwSnGE2YccC2oLDW_8=/1200x675/2020/04/16/7d6d8ed2-e10c-4f91-b2dd-74fae951c6d8/bazaart-edit-app.jpg',
    },
  ];
  const _renderItem = ({item, index}) => {
    return (
      <View style={{backgroundColor: Colors.white}}>
        <View
          style={{
            height: 100,
            borderRadius: 15,
            backgroundColor: Colors.black5,
          }}>
          <Image
            style={{
              resizeMode: 'cover',
              height: 100,
              borderRadius: 15,
              width: '100%',
            }}
            source={{uri: item.image}}
          />
        </View>
        <Text numberOfLines={2} style={styles.infoText}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.wrapper}>
      <SelectModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
        setIsModalVisible={setIsModalVisible}
      />
      <View style={styles.headerWrapper}>
        <View style={styles.infoWrapper}>
          <Text style={{...styles.font14, paddingBottom: 5}}>САЙН УУ ?</Text>
          <Text style={{...styles.font12, paddingBottom: 5}}>
            Энэхүү тестийн апп нь жолооны дамжаанд сурч байгаа болон сурах гэж
            байгаа хүмүүст шалгалтандаа бэлдэхэд туслах зорилгоор бүтээгдсэн
            болно. Та доорх 3 төрлөөс сонгон бэлдэх боломжтой. Санамж:
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.font36}>3</Text>
            <Text style={{...styles.font12, paddingHorizontal: 12}}>
              Удаа буруу хариулт өгвөл шалгалтанд унахыг анхаарна уу?
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsModalVisible(true);
            setSelectData({...selectData, selectedSection: 0});
          }}
          activeOpacity={0.6}
          style={styles.infoWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.font14}>ШАЛГАЛТ</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 8,
              }}>
              <Text style={{...styles.font12, marginRight: 12}}>20 минут</Text>
              <NextSvg />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.infoWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.font14}>СЭДВИЙН ТЕСТ</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 8,
              }}>
              <Text style={{...styles.font12, marginRight: 12}}>
                Хугацаагүй
              </Text>
              <NextSvg />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.infoWrapper}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.font14}>МАРАФОН</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 8,
              }}>
              <Text style={{...styles.font12, marginRight: 12}}>
                Хугацаагүй
              </Text>
              <NextSvg />
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerWrapper}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...styles.font14,
              color: Colors.black75,
              fontWeight: '500',
            }}>
            Шинэ мэдээнүүд
          </Text>
          <TouchableOpacity style={{marginRight: 24}}>
            <Text style={{...styles.font12, color: Colors.blue}}>
              Бүгдийг үзэх
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 8}}>
          <Carousel
            ref={c => {}}
            data={sliderData}
            renderItem={_renderItem}
            sliderWidth={windowWidth - 24}
            itemWidth={windowWidth / 2 + 50}
            activeSlideAlignment={'start'}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infoText: {
    fontWeight: '700',
    color: Colors.black75,
    fontSize: 12,
    lineHeight: 15,
    padding: 4,
  },
  wrapper: {flex: 1},
  headerWrapper: {
    backgroundColor: Colors.body,
    flex: 1,
    padding: 24,
  },
  footerWrapper: {
    backgroundColor: Colors.white,
    height: 200,
    paddingLeft: 24,
    paddingVertical: 20,
  },
  font36: {
    color: Colors.black100,
    fontWeight: '700',
    fontSize: 36,
    lineHeight: 42,
  },
  font12: {
    color: Colors.black55,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
  },
  font14: {
    color: Colors.black70,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  },
  infoWrapper: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 16,
    marginBottom: 8,
  },
});
export default HomeScreen;

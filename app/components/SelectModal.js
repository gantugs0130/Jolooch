import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import NextSvg from '../../assets/svg/next.svg';
import DriveB from '../../assets/svg/driveB.svg';
import DriveC from '../../assets/svg/driveC.svg';
import Modal from 'react-native-modal';
import React from 'react';
import Colors from '../constants/Colors';

const SelectModal = ({isModalVisible, setIsModalVisible, closeModal}) => {
  return (
    <Modal
      testID={'modal'}
      isVisible={isModalVisible}
      onSwipeComplete={() => {
        setIsModalVisible(false);
      }}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={styles.modalView}>
      <View style={styles.modalContent}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            closeModal(0);
          }}
          style={{
            height: 106,
            width: '100%',
            paddingVertical: 14,
            paddingHorizontal: 24,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: Colors.black10,
            justifyContent: 'space-around',
            marginVertical: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{...styles.font24Bold, marginRight: 8}}>B</Text>
              <Text style={styles.font14}>Ангилал</Text>
            </View>
            <NextSvg />
          </View>
          <DriveB />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            closeModal(1);
          }}
          style={{
            height: 106,
            width: '100%',
            paddingVertical: 14,
            paddingHorizontal: 24,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: Colors.black10,
            justifyContent: 'space-around',
            marginVertical: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{...styles.font24Bold, marginRight: 8}}>C, D</Text>
              <Text style={styles.font14}>Ангилал</Text>
            </View>
            <NextSvg />
          </View>
          <View style={{flexDirection: 'row'}}>
            <DriveB style={{marginRight: 16}} />
            <DriveC />
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default SelectModal;
const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  modalView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  font24Bold: {
    color: Colors.black100,
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
  },
  font14: {
    color: Colors.black70,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
  },
});

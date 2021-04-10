import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const InfoScreen = ({navigation}) => {
  const [data, setData] = useState({text: 'info'});
  useEffect(() => {
    setData({text: 'info'});
  }, []);
  return (
    <>
      <View style={styles.wrapper}>
        <Text>{data?.text}</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
});
export default InfoScreen;

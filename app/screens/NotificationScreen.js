import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const NotificationScreen = ({navigation}) => {
  const [data, setData] = useState({text: 'home'});
  useEffect(() => {
    setData({text: 'home'});
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
export default NotificationScreen;

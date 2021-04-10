import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MenuScreen = ({navigation}) => {
  const [data, setData] = useState({text: 'home'});
  useEffect(() => {
    setData({text: 'menu'});
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
export default MenuScreen;

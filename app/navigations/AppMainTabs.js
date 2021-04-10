import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import InfoScreen from '../screens/InfoScreen';
import NotificationScreen from '../screens/NotificationScreen';

import Home from '../../assets/svg/home.svg';
import Notification from '../../assets/svg/notif.svg';
import Menu from '../../assets/svg/menu.svg';
import Info from '../../assets/svg/info.svg';
import HomeFilled from '../../assets/svg/home-filled.svg';
import NotificationFilled from '../../assets/svg/notif-filled.svg';
import MenuFilled from '../../assets/svg/menu-filled.svg';
import InfoFilled from '../../assets/svg/info-filled.svg';

const Tab = createBottomTabNavigator();
const AppMainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let IconName;
          switch (route.name) {
            case 'home':
              IconName = focused ? HomeFilled : Home;
              break;
            case 'info':
              IconName = focused ? InfoFilled : Info;
              break;
            case 'notification':
              IconName = focused ? NotificationFilled : Notification;
              break;
            case 'menu':
              IconName = focused ? MenuFilled : Menu;
              break;
          }
          return (
            <View style={styles.tabItem}>
              <View style={focused ? styles.circle : styles.circleNone} />
              <IconName style={{color: 'red'}} />
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.black70,
        inactiveTintColor: Colors.black55,
        style: styles.bottomNav,
        showLabel: false,
        labelStyle: {textTransform: 'none', fontSize: 12, paddingBottom: 10},
      }}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="info" component={InfoScreen} />
      <Tab.Screen name="notification" component={NotificationScreen} />
      <Tab.Screen name="menu" component={MenuScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    marginBottom: -5,
  },
  circle: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.blue,
    marginBottom: 8,
  },
  circleNone: {
    width: 4,
    height: 4,
    marginBottom: 8,
  },
  bottomNav: {
    fontSize: 12,
    height: '10%',
    backgroundColor: Colors.white,
  },
  drawerIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: 5,
  },
});

export default AppMainTabs;

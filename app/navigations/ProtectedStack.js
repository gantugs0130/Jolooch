import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AppMainTabs from './AppMainTabs';
import ExamInfoScreen from '../screens/ExamInfoScreen';
import Colors from '../constants/Colors';
const ProtectedRoute = createStackNavigator();
import {View, TouchableOpacity} from 'react-native';
import Css from '../constants/Css';
import NextSvg from '../../assets/svg/next.svg';
import ExamScreen from '../screens/ExamScreen';
import ExamResultScreen from '../screens/ExamResultScreen';
import ExamDetailScreen from '../screens/ExamDetailScreen';
const ProtectedStack = () => {
  return (
    <ProtectedRoute.Navigator>
      <>
        <ProtectedRoute.Screen
          name="appMainTabs"
          component={AppMainTabs}
          options={{headerShown: false}}
        />
        <ProtectedRoute.Screen
          name="ExamInfoScreen"
          component={ExamInfoScreen}
          options={({navigation}) => ({
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: Colors.white,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#252525',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={Css.backButton}
                onPress={() => navigation.goBack()}>
                <View>
                  <NextSvg style={Css.backButtonIcon} />
                </View>
              </TouchableOpacity>
            ),
          })}
        />
        <ProtectedRoute.Screen
          name="ExamResultScreen"
          component={ExamResultScreen}
          options={{headerShown: false}}
        />
        <ProtectedRoute.Screen
          name="ExamScreen"
          component={ExamScreen}
          options={{headerShown: false}}
        />
        <ProtectedRoute.Screen
          name="ExamDetailScreen"
          component={ExamDetailScreen}
          options={({navigation}) => ({
            headerShown: true,
            title: '',
            headerStyle: {
              backgroundColor: Colors.white,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#252525',
            },
            headerLeft: () => (
              <TouchableOpacity
                style={Css.backButton}
                onPress={() => navigation.goBack()}>
                <View>
                  <NextSvg style={Css.backButtonIcon} />
                </View>
              </TouchableOpacity>
            ),
          })}
        />
      </>
    </ProtectedRoute.Navigator>
  );
};

export default ProtectedStack;

import {View} from 'react-native';
import React from 'react';
import Colors from './Colors';

export default {
  backButton: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  backButtonIcon: {
    fontFamily: 'Roboto',
    letterSpacing: 0,
    fontSize: 20,
    textAlign: 'center',
    color: Colors.backIconColor,
    transform: [{rotateZ: '180deg'}],
  },
};

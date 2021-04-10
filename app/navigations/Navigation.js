import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as NotificationProvider} from '../context/NotificationContext';
import ProtectedStack from './ProtectedStack';
export default () => {
  return (
    <>
      <NavigationContainer>
        <NotificationProvider>
          <ProtectedStack />
        </NotificationProvider>
      </NavigationContainer>
    </>
  );
};

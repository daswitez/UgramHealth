import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { StudentTabs } from './StudentTabs';
import { DoctorTabs } from './DoctorTabs';
import { useAuth } from '../store/AuthContext';

type RootStackParamList = {
  Auth: undefined;
  StudentApp: undefined;
  DoctorApp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { isAuthenticated, userRole } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name=\"Auth\" component={LoginScreen} />
        ) : userRole === 'student' ? (
          <Stack.Screen name=\"StudentApp\" component={StudentTabs} />
        ) : (
          <Stack.Screen name=\"DoctorApp\" component={DoctorTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

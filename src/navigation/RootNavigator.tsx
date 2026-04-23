import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { StudentTabs } from './StudentTabs';
import { DoctorTabs } from './DoctorTabs';
import { useAuth } from '../store/AuthContext';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
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
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : userRole === 'student' ? (
          <Stack.Screen name="StudentApp" component={StudentTabs} />
        ) : (
          <Stack.Screen name="DoctorApp" component={DoctorTabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

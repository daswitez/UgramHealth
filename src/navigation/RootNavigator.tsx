import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { StudentNavigator } from './StudentNavigator';
import { DoctorNavigator } from './DoctorNavigator';
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
          <Stack.Screen name="StudentApp" component={StudentNavigator} />
        ) : (
          <Stack.Screen name="DoctorApp" component={DoctorNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

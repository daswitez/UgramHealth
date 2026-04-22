import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { StudentTabs } from './StudentTabs';
import { DoctorTabs } from './DoctorTabs';

type RootStackParamList = {
  Auth: undefined;
  StudentApp: undefined;
  DoctorApp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// NOTE: We simulate a state where user is not logged in initially.
// Later we will use Context API / Zustand for global auth state.
export const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<'student' | 'doctor' | null>(null);

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

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DoctorDashboardScreen } from '../screens/doctor/DoctorDashboardScreen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export const DoctorTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
      headerShown: true,
    }}>
      <Tab.Screen name=\"DoctorHome\" component={DoctorDashboardScreen} options={{ title: 'Agenda' }} />
      {/* TODO: Add Alertas, Perfil */}
    </Tab.Navigator>
  );
};

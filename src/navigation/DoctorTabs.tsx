import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DoctorDashboardScreen } from '../screens/doctor/DoctorDashboardScreen';
import { NotificationsScreen } from '../screens/shared/NotificationsScreen';
import { ProfileScreen } from '../screens/shared/ProfileScreen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export const DoctorTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
      headerShown: true,
    }}>
      <Tab.Screen name="DoctorHome" component={DoctorDashboardScreen} options={{ title: 'Agenda' }} />
      <Tab.Screen name="DoctorNotifications" component={NotificationsScreen} options={{ title: 'Avisos' }} />
      <Tab.Screen name="DoctorProfile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
};

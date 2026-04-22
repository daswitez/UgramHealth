import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StudentDashboardScreen } from '../screens/student/StudentDashboardScreen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export const StudentTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
      headerShown: true,
    }}>
      <Tab.Screen name=\"StudentHome\" component={StudentDashboardScreen} options={{ title: 'Inicio' }} />
      {/* TODO: Add Reservas, Examenes, Avisos, Perfil */}
    </Tab.Navigator>
  );
};

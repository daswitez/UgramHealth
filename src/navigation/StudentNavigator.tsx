import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StudentTabs } from './StudentTabs';
import { BookingScreen } from '../screens/student/BookingScreen';
import { StudentAppointmentDetailScreen } from '../screens/student/StudentAppointmentDetailScreen';

export type StudentStackParamList = {
  StudentTabsHome: undefined;
  Booking: { isReschedule?: boolean } | undefined;
  StudentAppointmentDetail: undefined;
};

const Stack = createNativeStackNavigator<StudentStackParamList>();

export const StudentNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Tab Navigator serves as the base for the Student Stack */}
      <Stack.Screen name="StudentTabsHome" component={StudentTabs} />
      
      {/* Detail screens sit on top of the tabs, hiding them automatically */}
      <Stack.Screen 
        name="Booking" 
        component={BookingScreen} 
        options={{ headerShown: true, title: 'Nueva Reserva', headerBackTitle: 'Inicio' }}
      />
      <Stack.Screen 
        name="StudentAppointmentDetail" 
        component={StudentAppointmentDetailScreen} 
        options={{ headerShown: true, title: 'Mi Ficha Médica', headerBackTitle: 'Inicio' }}
      />
    </Stack.Navigator>
  );
};

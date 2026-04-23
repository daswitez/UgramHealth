import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DoctorTabs } from './DoctorTabs';
import { AppointmentDetailScreen } from '../screens/doctor/AppointmentDetailScreen';
import { ConsultationFormScreen } from '../screens/doctor/ConsultationFormScreen';

export type DoctorStackParamList = {
  DoctorTabsHome: undefined;
  AppointmentDetail: undefined; // We'd pass patient IDs in a real app
  ConsultationForm: undefined;
};

const Stack = createNativeStackNavigator<DoctorStackParamList>();

export const DoctorNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* We load the Tabs as the base route of this stack */}
      <Stack.Screen name="DoctorTabsHome" component={DoctorTabs} />
      
      {/* Detail screens sit on top of the tabs, hiding them automatically */}
      <Stack.Screen 
        name="AppointmentDetail" 
        component={AppointmentDetailScreen} 
        options={{ headerShown: true, title: 'Contexto de Atención' }}
      />
      <Stack.Screen 
        name="ConsultationForm" 
        component={ConsultationFormScreen} 
        options={{ headerShown: true, title: 'Ficha Clínica' }}
      />
    </Stack.Navigator>
  );
};

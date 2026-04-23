import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DoctorTabs } from './DoctorTabs';
import { AppointmentDetailScreen } from '../screens/doctor/AppointmentDetailScreen';
import { ConsultationFormScreen } from '../screens/doctor/ConsultationFormScreen';
import { OrderLabTestScreen } from '../screens/doctor/OrderLabTestScreen';
import { EmergencyWalkInScreen } from '../screens/doctor/EmergencyWalkInScreen';

export type DoctorStackParamList = {
  DoctorTabsHome: undefined;
  AppointmentDetail: undefined; // We'd pass patient IDs in a real app
  ConsultationForm: undefined;
  OrderLabTest: undefined;
  EmergencyWalkIn: undefined;
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
        options={{ headerShown: true, title: 'Contexto de Atención', headerBackTitle: 'Inicio' }}
      />
      <Stack.Screen 
        name="ConsultationForm" 
        component={ConsultationFormScreen} 
        options={{ headerShown: true, title: 'Ficha Clínica', headerBackTitle: 'Volver' }}
      />
      <Stack.Screen 
        name="OrderLabTest" 
        component={OrderLabTestScreen} 
        options={{ headerShown: true, title: 'Generar Orden Médica', headerBackTitle: 'Ficha' }}
      />
      <Stack.Screen 
        name="EmergencyWalkIn" 
        component={EmergencyWalkInScreen} 
        options={{ headerShown: true, title: 'Buscador de Estudiantes', headerBackTitle: 'Agenda' }}
      />
    </Stack.Navigator>
  );
};

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StudentDashboardScreen } from '../screens/student/StudentDashboardScreen';
import { AppointmentsListScreen } from '../screens/student/AppointmentsListScreen';
import { LabResultsScreen } from '../screens/student/LabResultsScreen';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export const StudentTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.textSecondary,
      headerShown: true,
    }}>
      <Tab.Screen name="StudentHome" component={StudentDashboardScreen} options={{ title: 'Inicio' }} />
      <Tab.Screen name="StudentReservations" component={AppointmentsListScreen} options={{ title: 'Mis Citas' }} />
      <Tab.Screen name="StudentLabResults" component={LabResultsScreen} options={{ title: 'Exámenes' }} />
      {/* TODO: Add Avisos, Perfil */}
    </Tab.Navigator>
  );
};

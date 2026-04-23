import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StudentDashboardScreen } from '../screens/student/StudentDashboardScreen';
import { AppointmentsListScreen } from '../screens/student/AppointmentsListScreen';
import { LabResultsScreen } from '../screens/student/LabResultsScreen';
import { NotificationsScreen } from '../screens/shared/NotificationsScreen';
import { ProfileScreen } from '../screens/shared/ProfileScreen';
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
      <Tab.Screen name="StudentNotifications" component={NotificationsScreen} options={{ title: 'Avisos' }} />
      <Tab.Screen name="StudentProfile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    </Tab.Navigator>
  );
};

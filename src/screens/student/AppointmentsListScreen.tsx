import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StudentStackParamList } from '../../navigation/StudentNavigator';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { colors } from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<StudentStackParamList>;

export const AppointmentsListScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="h2" style={styles.title}>Mis Reservas</Text>
          <Text variant="body" color={colors.textSecondary}>
            Controla tu historial de consultas y próximas atenciones.
          </Text>
        </View>

        <View style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>Citas Próximas</Text>
          
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('StudentAppointmentDetail')}>
            <Card style={styles.appointmentCard}>
              <View style={styles.cardTopRow}>
                <Badge label="Confirmada" status="success" />
                <Text variant="label">Mañana, 09:30 AM</Text>
              </View>
              <Text variant="body" style={styles.headline}>Control General</Text>
              <Text variant="label" color={colors.textSecondary}>Dra. Maria López • FUSUM</Text>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>Historial Pasado</Text>
          
          <TouchableOpacity activeOpacity={1}>
            <Card style={styles.pastAppointmentCard}>
              <View style={styles.cardTopRow}>
                <Badge label="Atendida" status="info" />
                <Text variant="label">Hace 2 meses</Text>
              </View>
              <Text variant="body" style={styles.pastHeadline}>Consulta Odontológica</Text>
              <Text variant="label" color={colors.textSecondary}>Limpieza General</Text>
            </Card>
          </TouchableOpacity>
          
          <TouchableOpacity activeOpacity={1}>
            <Card style={styles.pastAppointmentCard}>
              <View style={styles.cardTopRow}>
                <Badge label="Cancelada" status="error" />
                <Text variant="label">Hace 4 meses</Text>
              </View>
              <Text variant="body" style={[styles.pastHeadline, {textDecorationLine: 'line-through'}]}>Medicina General</Text>
              <Text variant="label" color={colors.textSecondary}>Ausencia reportada</Text>
            </Card>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    color: colors.textSecondary,
    marginBottom: 16,
  },
  appointmentCard: {
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  pastAppointmentCard: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.surfaceHover,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  headline: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    marginBottom: 4,
  },
  pastHeadline: {
    fontFamily: 'Inter-Medium',
    marginBottom: 4,
  }
});

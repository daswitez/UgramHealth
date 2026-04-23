import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/DoctorNavigator';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<DoctorStackParamList, 'AppointmentDetail'>;

export const AppointmentDetailScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  // In a real app we would receive patientId or appointmentId via route.params
  // For now, we mock the student's data.
  const studentData = {
    name: 'Juan Pérez Gómez',
    age: '21 años',
    career: 'Ingeniería Informática',
    service: 'Medicina General',
    type: 'Control de rutina',
    time: '08:30 AM',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="label">Detalle del Paciente</Text>
          <Text variant="h2" style={styles.title}>{studentData.name}</Text>
          <Badge label="Esperando en Sala" status="warning" />
        </View>

        {/* MEDICAL ALERTS SECTION */}
        <View style={styles.alertContainer}>
          <View style={styles.alertHeader}>
            <Text variant="h2" style={styles.alertTitle}>! Alertas Médicas</Text>
          </View>
          <View style={styles.alertRow}>
            <Badge label="Crónico" status="error" />
            <Text variant="body" style={styles.alertDesc}>Asma Bronquial Severa</Text>
          </View>
          <View style={styles.alertRow}>
            <Badge label="Alergia" status="error" />
            <Text variant="body" style={styles.alertDesc}>Penicilina (Choque Anafiláctico)</Text>
          </View>
        </View>

        <Card style={styles.infoCard}>
          <View style={styles.dataRow}>
            <Text variant="label" style={styles.dataLabel}>Edad</Text>
            <Text variant="body">{studentData.age}</Text>
          </View>
          <View style={styles.dataRow}>
            <Text variant="label" style={styles.dataLabel}>Carrera</Text>
            <Text variant="body">{studentData.career}</Text>
          </View>
          <View style={styles.lastDataRow}>
            <Text variant="label" style={styles.dataLabel}>Motivo de Consulta</Text>
            <Text variant="body">{studentData.service} • {studentData.type}</Text>
          </View>
        </Card>

        {/* HISTORIAL PREVIO (Mock) */}
        <View style={styles.historySection}>
          <Text variant="h2" style={styles.historyTitle}>Atenciones Recientes</Text>
          <Card style={styles.historyCard}>
            <Text variant="body" style={styles.historyHeadline}>Dolor Estomacal Agudo</Text>
            <Text variant="label">Dr. Roberto Carlos • Hace 1 mes</Text>
          </Card>
        </View>

        <View style={styles.actions}>
          <Button 
            title="Iniciar Atención" 
            onPress={() => navigation.replace('ConsultationForm')} 
          />
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
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 4,
    marginBottom: 12,
  },
  alertContainer: {
    backgroundColor: '#FEF2F2', // Red 50
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FCCCA7', // Red 200 equivalent
    marginBottom: 24,
  },
  alertHeader: {
    marginBottom: 12,
  },
  alertTitle: {
    color: '#DC2626', // Red 600
    fontSize: 16,
  },
  alertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  alertDesc: {
    marginLeft: 12,
    fontFamily: 'Inter-Medium',
  },
  infoCard: {
    marginBottom: 32,
  },
  dataRow: {
    marginBottom: 16,
  },
  lastDataRow: {
    marginBottom: 0,
  },
  dataLabel: {
    marginBottom: 4,
  },
  historySection: {
    marginBottom: 32,
  },
  historyTitle: {
    fontSize: 20,
    marginBottom: 16,
  },
  historyCard: {
    borderWidth: 1,
    borderColor: colors.border,
    elevation: 0,
    shadowOpacity: 0,
  },
  historyHeadline: {
    fontFamily: 'Inter-Medium',
    marginBottom: 4,
  },
  actions: {
    marginTop: 'auto',
  },
});

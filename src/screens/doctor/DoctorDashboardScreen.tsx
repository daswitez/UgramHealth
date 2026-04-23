import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';
import { useAuth } from '../../store/AuthContext';

export const DoctorDashboardScreen = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="label">Dr. Roberto Carlos</Text>
          <Text variant="h2">Agenda del Día</Text>
        </View>

        {/* SIGUIENTE PACIENTE */}
        <Card elevated style={styles.highlightCard}>
          <View style={styles.cardHeader}>
            <Text variant="label">Siguiente en atender: 08:30 AM</Text>
            <Badge label="En sala" status="warning" />
          </View>
          <Text variant="h2" style={styles.patientName}>Juan Pérez Gómez</Text>
          <Text variant="body" color={colors.textSecondary} style={styles.cardDetails}>
            Medicina General • Control de rutina
          </Text>
          <Button title="Abrir ficha clínica" onPress={() => {}} />
        </Card>

        {/* LISTA ESCANEABLE DE AGENDA (Regla Médico) */}
        <View style={styles.section}>
          <Text variant="h2" style={styles.sectionTitle}>Próximas Citas</Text>
          
          <Card style={styles.agendaCard}>
            <View style={styles.agendaRow}>
              <Text variant="body" style={styles.agendaTime}>09:00 AM</Text>
              <View style={styles.agendaInfo}>
                <Text variant="body">María Fernández</Text>
                <Text variant="label">Certificado Médico</Text>
              </View>
              <Badge label="Pendiente" status="info" />
            </View>
          </Card>

          <Card style={styles.agendaCard}>
            <View style={styles.agendaRow}>
              <Text variant="body" style={styles.agendaTime}>09:30 AM</Text>
              <View style={styles.agendaInfo}>
                <Text variant="body">Carlos Ortiz</Text>
                <Text variant="label">Revisión de Exámenes</Text>
              </View>
              <Badge label="Pendiente" status="info" />
            </View>
          </Card>
        </View>

        {/* TEMPORAL LOGOUT */}
        <View style={styles.footer}>
           <Button title="Cerrar sesión (Test)" variant="secondary" onPress={logout} />
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
    marginTop: 16,
  },
  highlightCard: {
    marginBottom: 32,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary, // Indicador visual clínico
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  patientName: {
    fontSize: 20,
    marginBottom: 4,
  },
  cardDetails: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 16,
  },
  agendaCard: {
    marginBottom: 12,
  },
  agendaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  agendaTime: {
    fontFamily: 'Inter-SemiBold',
    width: 70,
  },
  agendaInfo: {
    flex: 1,
  },
  footer: {
    marginTop: 24,
  },
});

import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';
import { useAuth } from '../../store/AuthContext';

export const StudentDashboardScreen = () => {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="label">Hola, Estudiante</Text>
          <Text variant="h2">¿Qué necesitas hoy?</Text>
        </View>

        {/* PRÓXIMA ACCIÓN: Acción Principal Inmediata (Regla UX) */}
        <Card elevated style={styles.highlightCard}>
          <View style={styles.cardHeader}>
            <Text variant="h2" style={{ fontSize: 18 }}>Control General</Text>
            <Badge label="Confirmada" status="success" />
          </View>
          <Text variant="body" color={colors.textSecondary} style={styles.cardDetails}>
            Dra. Maria López • Mañana, 09:30 AM
          </Text>
          <Button title="Ver detalles" onPress={() => {}} />
        </Card>

        {/* ACCESO RÁPIDO */}
        <View style={styles.section}>
          <Text variant="h2" style={styles.sectionTitle}>Acciones Rápidas</Text>
          <Card style={styles.actionCard}>
            <Text variant="body" style={styles.actionTitle}>Reservar nueva ficha</Text>
            <Text variant="label">Medicina general, laboratorios, certificados.</Text>
          </Card>
        </View>

        {/* EXÁMENES Y RESULTADOS */}
        <View style={styles.section}>
          <Text variant="h2" style={styles.sectionTitle}>Resultados Recientes</Text>
          <Card style={styles.actionCard}>
            <View style={styles.cardHeader}>
              <Text variant="body" style={styles.actionTitle}>Hemograma</Text>
              <Badge label="Disponible" status="info" />
            </View>
            <Text variant="label">Hace 2 días</Text>
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
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
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
  actionCard: {
    marginBottom: 12,
  },
  actionTitle: {
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  footer: {
    marginTop: 24,
  },
});

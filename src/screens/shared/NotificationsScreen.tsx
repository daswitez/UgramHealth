import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useAuth } from '../../store/AuthContext';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { colors } from '../../theme/colors';

const STUDENT_NOTIFS = [
  { id: '1', title: 'Resultados de Laboratorio', desc: 'Tu hemograma completo ha sido anexado a tu perfil clínico y está listo para descarga.', date: 'Hace 2 horas', isRead: false },
  { id: '2', title: 'Ficha Confirmada', desc: 'Recuerda que tienes una cita de Odontología este Miércoles a las 09:30 AM.', date: 'Ayer', isRead: true },
];

const DOCTOR_NOTIFS = [
  { id: '3', title: 'Cancelación de Ficha', desc: 'El estudiante Juan Pérez ha cancelado su reserva de Control General.', date: 'Hace 5 minutos', isRead: false },
  { id: '4', title: 'Nuevos Exámenes', desc: 'Hay resultados listos para su revisión correspondientes a pacientes de ayer.', date: 'Hace 1 hora', isRead: true },
];

export const NotificationsScreen = () => {
  const { userRole } = useAuth();
  
  const notifs = userRole === 'doctor' ? DOCTOR_NOTIFS : STUDENT_NOTIFS;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="h2" style={styles.title}>Notificaciones</Text>
          <Text variant="body" color={colors.textSecondary}>
            Mantente al día con tus avisos institucionales.
          </Text>
        </View>

        <View style={styles.list}>
          {notifs.map((n) => (
            <TouchableOpacity key={n.id} activeOpacity={0.8}>
              <Card style={[styles.notifCard, !n.isRead && styles.notifUnread]}>
                <View style={styles.rowTop}>
                  <Text variant="label" color={!n.isRead ? colors.primary : colors.textSecondary}>{n.date}</Text>
                  {!n.isRead && <View style={styles.dot} />}
                </View>
                <Text variant="body" style={styles.headline}>{n.title}</Text>
                <Text variant="body" color={colors.textSecondary}>{n.desc}</Text>
              </Card>
            </TouchableOpacity>
          ))}
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
  },
  header: {
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
  },
  list: {
    gap: 12,
  },
  notifCard: {
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  notifUnread: {
    backgroundColor: '#F0F9FF',
    borderColor: '#E0F2FE',
  },
  rowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headline: {
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  }
});

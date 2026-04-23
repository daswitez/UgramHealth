import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

type ExamStatus = 'pending' | 'completed';
interface ExamMockData {
  title: string;
  doctor: string;
  date: string;
  status: ExamStatus;
  details?: Record<string, string>;
}

const HEMOGRAMA_MOCK: ExamMockData = {
  title: 'Hemograma Completo',
  doctor: 'Dra. Maria López',
  date: '12 May 2026',
  status: 'completed',
  details: {
    'Leucocitos': '7,500 u/L (Normal)',
    'Hemoglobina': '14.2 g/dL (Normal)',
    'Glucosa': '85 mg/dL (Normal)',
    'Plaquetas': '250,000 u/L (Normal)',
  }
};

const PENDING_LIPID_MOCK: ExamMockData = {
  title: 'Perfil Lipídico',
  doctor: 'Dra. Maria López',
  date: 'Hoy',
  status: 'pending',
};

export const LabResultsScreen = () => {
  const [selectedExam, setSelectedExam] = useState<ExamMockData | null>(null);

  const closeModal = () => setSelectedExam(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="h2" style={styles.title}>Resultados Médicos</Text>
          <Text variant="body" color={colors.textSecondary}>
            Sigue el estado de tus exámenes y descárgalos.
          </Text>
        </View>

        <View style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>En Proceso</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedExam(PENDING_LIPID_MOCK)}>
            <Card style={styles.processingCard}>
              <View style={styles.cardTopRow}>
                <Badge label="Pendiente" status="warning" />
                <Text variant="label">Hace 1 día</Text>
              </View>
              <Text variant="body" style={styles.headline}>Perfil Lipídico</Text>
              <Text variant="label" color={colors.textSecondary}>Dr. Roberto Carlos</Text>
            </Card>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text variant="body" style={styles.sectionTitle}>Finalizados</Text>
          <TouchableOpacity activeOpacity={0.8} onPress={() => setSelectedExam(HEMOGRAMA_MOCK)}>
            <Card style={styles.completedCard}>
              <View style={styles.cardTopRow}>
                <Badge label="Terminado" status="info" />
                <Text variant="label">12 May 2026</Text>
              </View>
              <Text variant="body" style={styles.headline}>Hemograma Completo</Text>
              <Text variant="label" color={colors.textSecondary}>Valores dentro de los parámetros normales.</Text>
            </Card>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* DETAILED EXAM MODAL */}
      {selectedExam && (
        <Modal visible={!!selectedExam} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Badge label={selectedExam.status === 'completed' ? 'Finalizado' : 'En Evaluación'} status={selectedExam.status === 'completed' ? 'success' : 'warning'} />
                <Text variant="label">{selectedExam.date}</Text>
              </View>
              <Text variant="h2" style={styles.modalTitle}>{selectedExam.title}</Text>
              <Text variant="body" color={colors.textSecondary} style={{marginBottom: 24}}>Orden de: {selectedExam.doctor}</Text>

              {selectedExam.status === 'completed' && selectedExam.details ? (
                <View style={styles.detailsTable}>
                  {Object.entries(selectedExam.details).map(([key, value]) => (
                    <View key={key} style={styles.detailRow}>
                      <Text variant="label" color={colors.textSecondary}>{key}</Text>
                      <Text variant="body" style={styles.detailValue}>{value}</Text>
                    </View>
                  ))}
                  <View style={styles.spacing} />
                  <Button title="Descargar PDF Autorizado" onPress={() => closeModal()} />
                </View>
              ) : (
                <View style={styles.pendingBox}>
                  <Text variant="body" align="center" style={{lineHeight: 24}}>
                    Este estudio ha sido despachado a la red de laboratorios. Toma un promedio de 24 a 48 horas hábiles procesar los resultados analíticos. Te notificaremos cuando el informe esté listo.
                  </Text>
                </View>
              )}

              <View style={styles.modalFooter}>
                <TouchableOpacity onPress={closeModal} style={styles.closeBtn}>
                  <Text variant="body" color={colors.primary} style={{fontFamily: 'Inter-SemiBold'}}>Cerrar Ventana</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
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
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    color: colors.textSecondary,
    marginBottom: 16,
  },
  processingCard: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: colors.surfaceHover,
  },
  completedCard: {
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
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
  downloadButton: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  downloadText: {
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: '60%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    marginBottom: 4,
  },
  detailsTable: {
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailValue: {
    fontFamily: 'Inter-Medium',
  },
  pendingBox: {
    backgroundColor: '#FFFBEB',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  modalFooter: {
    marginTop: 'auto',
    alignItems: 'center',
    paddingVertical: 16,
  },
  closeBtn: {
    padding: 16,
  },
  spacing: {
    height: 24,
  }
});

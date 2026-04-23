import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert, Modal, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/DoctorNavigator';
import { Text } from '../../components/ui/Text';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<DoctorStackParamList, 'OrderLabTest'>;

const LAB_OPTIONS = [
  'Hemograma Completo',
  'Perfil Lipídico',
  'Urocultivo',
  'Radiografía de Tórax',
  'Ecografía Abdominal',
  'Test de VIH (Confidencial)',
];

export const OrderLabTestScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  // Store multiple selected tests
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const toggleTest = (test: string) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter(t => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  const handleOrderTests = () => {
    setIsSubmitting(true);
    // Fake server delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigation.goBack();
      }, 2000);
    }, 1200);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="h2" style={styles.title}>Prescribir Exámenes</Text>
          <Text variant="body" color={colors.textSecondary}>
             Selecciona los estudios de laboratorio o imagenología requeridos.
          </Text>
        </View>

        <View style={styles.optionsContainer}>
          {LAB_OPTIONS.map((test) => {
            const isSelected = selectedTests.includes(test);
            return (
              <TouchableOpacity
                key={test}
                activeOpacity={0.8}
                onPress={() => toggleTest(test)}
                style={[
                  styles.optionRow,
                  isSelected && styles.optionRowSelected
                ]}
              >
                <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                  {isSelected && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text 
                  variant="body" 
                  style={[styles.optionText, isSelected && styles.optionTextSelected]}
                >
                  {test}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

      </ScrollView>

      {/* CONFIRMATION MODAL */}
      <Modal visible={isSubmitting || showSuccess} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {isSubmitting ? (
              <>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text variant="h2" style={styles.modalText}>Digitando orden...</Text>
              </>
            ) : (
              <>
                <View style={styles.successIcon}>
                  <Text variant="h1" color={colors.success}>✓</Text>
                </View>
                <Text variant="h2" style={styles.modalText}>¡Orden Generada!</Text>
                <Text variant="body" color={colors.textSecondary} align="center">
                  Anexada a la ficha clínica del paciente.
                </Text>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* FIXED FOOTER BUTTON */}
      <View style={styles.footer}>
        <Button 
          title={selectedTests.length > 0 ? `Generar Orden (${selectedTests.length})` : 'Seleccione al menos uno'} 
          disabled={selectedTests.length === 0 || isSubmitting || showSuccess}
          onPress={handleOrderTests} 
        />
      </View>
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
    paddingBottom: 120, // space for footer
  },
  header: {
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceHover,
  },
  optionRowSelected: {
    backgroundColor: '#F0F9FF',
    borderColor: colors.primary,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  checkboxSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  optionText: {
    flex: 1,
  },
  optionTextSelected: {
    fontFamily: 'Inter-Medium',
    color: colors.primary,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    paddingBottom: 40,
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: colors.background,
    padding: 32,
    borderRadius: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 340,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  modalText: {
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  successIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#DCFCE7', 
    justifyContent: 'center',
    alignItems: 'center',
  }
});

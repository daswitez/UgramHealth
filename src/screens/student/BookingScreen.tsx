import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StudentStackParamList } from '../../navigation/StudentNavigator';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<StudentStackParamList, 'Booking'>;
type BookingRouteProp = RouteProp<StudentStackParamList, 'Booking'>;

const SPECIALTIES = ['Medicina General', 'Odontología', 'Psicología'];
const MOCK_DOCTORS: Record<string, string[]> = {
  'Medicina General': ['Dra. Maria López', 'Dr. Roberto Carlos'],
  'Odontología': ['Dr. Juan Pérez (Ortodoncia)'],
  'Psicología': ['Lic. Carmen Suarez'],
};
const MOCK_DATES = ['Lun 12', 'Mar 13', 'Mié 14'];
const MOCK_TIMES = ['08:00 AM', '09:30 AM', '11:00 AM', '14:30 PM'];

export const BookingScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<BookingRouteProp>();
  const isReschedule = route.params?.isReschedule || false;

  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const [isBooking, setIsBooking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleBooking = () => {
    setIsBooking(true);
    setTimeout(() => {
      setIsBooking(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigation.popToTop();
      }, 2000);
    }, 1000);
  };

  const handleSpecialtySelect = (spec: string) => {
    setSelectedSpecialty(spec);
    setSelectedDoctor(null);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDoctorSelect = (doc: string) => {
    setSelectedDoctor(doc);
    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="h2" style={styles.title}>
            {isReschedule ? 'Reprogramar Ficha' : '¿Qué servicio buscas?'}
          </Text>
          <Text variant="body" color={colors.textSecondary}>
            {isReschedule ? 'Elige tu nuevo horario.' : 'Selecciona paso a paso tu ficha médica.'}
          </Text>
        </View>

        {/* STEP 1: Especialidad */}
        <View style={styles.section}>
          <Text variant="label" style={styles.stepLabel}>1. Especialidad</Text>
          <View style={styles.bubbleRow}>
            {SPECIALTIES.map((spec) => {
              const isSelected = selectedSpecialty === spec;
              return (
                <TouchableOpacity key={spec} onPress={() => handleSpecialtySelect(spec)}>
                  <View style={[styles.timeBubble, isSelected && styles.timeBubbleSelected]}>
                    <Text variant="body" color={isSelected ? colors.primary : colors.textSecondary}>{spec}</Text>
                  </View>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>

        {/* STEP 2: Doctor */}
        {selectedSpecialty && (
          <View style={styles.section}>
            <Text variant="label" style={styles.stepLabel}>2. Elige un Médico Módico</Text>
            {MOCK_DOCTORS[selectedSpecialty].map(doc => {
              const isSelected = selectedDoctor === doc;
              return (
                <TouchableOpacity key={doc} activeOpacity={0.8} onPress={() => handleDoctorSelect(doc)}>
                  <Card style={[styles.docCard, isSelected && styles.specialtyCardSelected]}>
                    <Text variant="body" style={isSelected ? styles.specialtyTextSelected : undefined}>{doc}</Text>
                  </Card>
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {/* STEP 3: Días Habilitados */}
        {selectedDoctor && (
          <View style={styles.section}>
            <Text variant="label" style={styles.stepLabel}>3. Fechas Disponibles</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollRow}>
              {MOCK_DATES.map((date) => {
                const isSelected = selectedDate === date;
                return (
                  <TouchableOpacity key={date} onPress={() => { setSelectedDate(date); setSelectedTime(null); }}>
                    <View style={[styles.dateCard, isSelected && styles.specialtyCardSelected]}>
                      <Text variant="body" style={isSelected ? styles.specialtyTextSelected : undefined}>{date}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          </View>
        )}

        {/* STEP 4: Bloques Horarios */}
        {selectedDate && (
          <View style={styles.section}>
            <Text variant="label" style={styles.stepLabel}>4. Horarios para {selectedDate}</Text>
            <View style={styles.bubbleRow}>
              {MOCK_TIMES.map((time) => {
                const isSelected = selectedTime === time;
                return (
                  <TouchableOpacity key={time} onPress={() => setSelectedTime(time)}>
                    <View style={[styles.timeBubble, isSelected && styles.timeBubbleSelected]}>
                      <Text variant="body" color={isSelected ? colors.primary : colors.textSecondary}>{time}</Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
        )}

      </ScrollView>

      {/* CONFIRMATION MODAL */}
      <Modal visible={isBooking || showSuccess} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {isBooking ? (
              <>
                <ActivityIndicator size="large" color={colors.primary} />
                <Text variant="h2" style={styles.modalText}>Procesando solicitud...</Text>
              </>
            ) : (
              <>
                <View style={styles.successIcon}>
                  <Text variant="h1" color={colors.success}>✓</Text>
                </View>
                <Text variant="h2" style={styles.modalText}>
                  {isReschedule ? '¡Cita Reprogramada!' : '¡Ficha Confirmada!'}
                </Text>
                <Text variant="body" color={colors.textSecondary} align="center">
                  Te avisaremos horas antes de tu atención.
                </Text>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* FIXED FOOTER BUTTON */}
      <View style={styles.footer}>
        <Button 
          title={selectedTime ? (isReschedule ? 'Confirmar Reprogramación' : 'Confirmar Ficha') : 'Completa todos los pasos'} 
          disabled={!selectedTime || isBooking || showSuccess}
          onPress={handleBooking} 
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
    paddingBottom: 120, // Space for absolute footer
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
  stepLabel: {
    marginBottom: 12,
  },
  bubbleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  scrollRow: {
    gap: 12,
  },
  timeBubble: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.surfaceHover,
    borderWidth: 1,
    borderColor: colors.border,
  },
  timeBubbleSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  docCard: {
    marginBottom: 12,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  dateCard: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: colors.surfaceHover,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 12,
  },
  specialtyCardSelected: {
    borderColor: colors.primary,
    backgroundColor: '#F0F9FF', 
  },
  specialtyTextSelected: {
    fontFamily: 'Inter-SemiBold',
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

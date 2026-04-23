import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StudentStackParamList } from '../../navigation/StudentNavigator';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<StudentStackParamList, 'Booking'>;

const SPECIALTIES = ['Medicina General', 'Odontología', 'Ginecología', 'Psicología', 'Laboratorio'];

export const BookingScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  
  const handleBooking = () => {
    // In a real app, hit API point to book.
    // Fake navigation back after \"reserving\"
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="h2" style={styles.title}>¿Qué servicio buscas?</Text>
          <Text variant="body" color={colors.textSecondary}>Selecciona una especialidad para ver disponibilidad.</Text>
        </View>

        <View style={styles.list}>
          {SPECIALTIES.map((spec) => {
            const isSelected = selectedSpecialty === spec;
            return (
              <TouchableOpacity 
                key={spec} 
                activeOpacity={0.8}
                onPress={() => setSelectedSpecialty(spec)}
              >
                <Card style={[styles.specialtyCard, isSelected && styles.specialtyCardSelected]}>
                  <Text variant="body" style={isSelected ? styles.specialtyTextSelected : undefined}>
                    {spec}
                  </Text>
                </Card>
              </TouchableOpacity>
            );
          })}
        </View>

        {selectedSpecialty && (
          <View style={styles.datetimeContainer}>
            <Text variant="h2" style={{marginBottom: 16}}>Fecha y Hora (Rápida)</Text>
            <View style={styles.bubbleRow}>
              <View style={[styles.timeBubble, { backgroundColor: colors.primaryLight }]}>
                <Text variant="body" color={colors.primary}>Hoy • 09:30 AM</Text>
              </View>
              <View style={styles.timeBubble}>
                <Text variant="body" color={colors.textSecondary}>Hoy • 11:00 AM</Text>
              </View>
            </View>
          </View>
        )}

      </ScrollView>

      {/* FIXED FOOTER BUTTON */}
      <View style={styles.footer}>
        <Button 
          title={selectedSpecialty ? `Confirmar Ficha` : 'Seleccione una especialidad'} 
          disabled={!selectedSpecialty}
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
    paddingBottom: 100, // Space for absolute footer
  },
  header: {
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
  },
  list: {
    marginBottom: 32,
  },
  specialtyCard: {
    marginBottom: 12,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  specialtyCardSelected: {
    borderColor: colors.primary,
    backgroundColor: '#F0F9FF', // Subtle tint based on brand
  },
  specialtyTextSelected: {
    fontFamily: 'Inter-SemiBold',
    color: colors.primary,
  },
  datetimeContainer: {
    marginBottom: 32,
  },
  bubbleRow: {
    flexDirection: 'row',
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
  }
});

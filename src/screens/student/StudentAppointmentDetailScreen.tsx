import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StudentStackParamList } from '../../navigation/StudentNavigator';
import { Text } from '../../components/ui/Text';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<StudentStackParamList, 'StudentAppointmentDetail'>;

export const StudentAppointmentDetailScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleCancelClick = () => {
    Alert.alert(
      "Cancelar Ficha",
      "¿Estás seguro que deseas cancelar tu revisión de Medicina General? Esta acción no se puede deshacer.",
      [
        { text: "No, mantener cita", style: "cancel" },
        { 
          text: "Sí, cancelar", 
          style: "destructive",
          onPress: () => {
            // Fake cancel execution then nav back
            navigation.popToTop();
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="label">Dra. Maria López</Text>
          <Text variant="h2" style={styles.title}>Control General</Text>
          <Badge label="Confirmada" status="success" />
        </View>

        <Card style={styles.infoCard}>
          <View style={styles.dataRow}>
            <Text variant="label" style={styles.dataLabel}>Día de la cita</Text>
            <Text variant="body">Mañana, 09:30 AM</Text>
          </View>
          <View style={styles.dataRow}>
            <Text variant="label" style={styles.dataLabel}>Lugar</Text>
            <Text variant="body">FUSUM (Módulo Central, Planta Baja)</Text>
          </View>
          <View style={styles.lastDataRow}>
            <Text variant="label" style={styles.dataLabel}>Instrucciones Especiales</Text>
            <Text variant="body">Presentar carnet de estudiante en ventanilla 15 minutos antes de la hora acordada.</Text>
          </View>
        </Card>

        {/* CANCELLATION AND RESCHEDULE DEMO */}
        <View style={styles.actions}>
          <Button 
            title="Reprogramar (Mock)" 
            onPress={() => navigation.navigate('Booking', { isReschedule: true })} 
          />
          <View style={styles.spacing} />
          <Button 
            title="Cancelar Ficha Segura" 
            variant="secondary"
            onPress={handleCancelClick} 
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
  actions: {
    marginTop: 'auto',
  },
  spacing: {
    height: 16,
  }
});

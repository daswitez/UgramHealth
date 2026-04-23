import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/DoctorNavigator';
import { Text } from '../../components/ui/Text';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<DoctorStackParamList, 'EmergencyWalkIn'>;

export const EmergencyWalkInScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [studentId, setStudentId] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (!studentId || studentId.length < 5) {
      Alert.alert('Error', 'Ingrese un Registro Universitario válido (ej. 220019283)');
      return;
    }

    setIsSearching(true);
    // Simulate database lookup
    setTimeout(() => {
      setIsSearching(false);
      Alert.alert(
        "Estudiante Encontrado", 
        "Juan Pérez Gómez (Ing. Informática).\n¿Desea aperturar una Ficha Médica de urgencia?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Iniciar Consulta", onPress: () => {
              // Usually we would pass the patient ID. Here we just navigate to the mock.
              navigation.replace('ConsultationForm'); 
          }}
        ]
      );
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <Text variant="h2" style={styles.title}>Atención Express (Walk-in)</Text>
          <Text variant="body" color={colors.textSecondary}>
            Busca a un universitario no agendado por su Registro o Carnet de Identidad para aperturar una ficha de emergencia.
          </Text>
        </View>

        <View style={styles.searchSection}>
          <Input 
            label="Registro Universitario" 
            placeholder="Ej. 220019283"
            keyboardType="number-pad"
            value={studentId}
            onChangeText={setStudentId}
            autoFocus
          />
          
          <Button 
            title={isSearching ? "Buscando..." : "Buscar Paciente"} 
            onPress={handleSearch}
            disabled={isSearching || studentId.length === 0}
            style={styles.searchBtn}
          />
          
          {isSearching && <ActivityIndicator size="large" color={colors.primary} style={{marginTop: 24}} />}
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
  searchSection: {
    backgroundColor: colors.surfaceHover,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchBtn: {
    marginTop: 16,
  }
});

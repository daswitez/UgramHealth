import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DoctorStackParamList } from '../../navigation/DoctorNavigator';
import { Text } from '../../components/ui/Text';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

type NavigationProp = NativeStackNavigationProp<DoctorStackParamList, 'ConsultationForm'>;

export const ConsultationFormScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatment, setTreatment] = useState('');

  const handleSave = () => {
    // Return back to the tabs (Dashboard) when done with the consult
    // Using popToTop because the tabs are the root of this stack
    navigation.popToTop();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.header}>
            <Text variant="label">Paciente: Juan Pérez Gómez</Text>
            <Text variant="h2" style={styles.title}>Registro Clínico</Text>
          </View>

          <View style={styles.formSection}>
            <Input
              label="Motivo y Síntomas"
              placeholder="Describa los síntomas reportados por el estudiante..."
              value={symptoms}
              onChangeText={setSymptoms}
              multiline={true}
              numberOfLines={4}
            />

            <Input
              label="Diagnóstico"
              placeholder="Ej. Faringitis aguda"
              value={diagnosis}
              onChangeText={setDiagnosis}
              multiline={false}
            />

            <Input
              label="Tratamiento / Acciones a seguir"
              placeholder="Indique medicamentos, reposo, o pasos clínicos..."
              value={treatment}
              onChangeText={setTreatment}
              multiline={true}
              numberOfLines={5}
            />
          </View>

          <View style={styles.actions}>
            <Button 
              title="Guardar Atención" 
              onPress={handleSave} 
            />
            <Button 
              title="Prescribir Examen" 
              variant="secondary"
              style={styles.secondaryBtn}
              onPress={() => navigation.navigate('OrderLabTest')} 
            />
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    marginTop: 4,
  },
  formSection: {
    marginBottom: 32,
  },
  actions: {
    marginTop: 16,
  },
  secondaryBtn: {
    marginTop: 16,
  }
});

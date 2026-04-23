import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView, Platform, KeyboardAvoidingView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  const [isDraft, setIsDraft] = useState(false);

  const DRAFT_KEY = '@consultation_draft_juanperez';

  useEffect(() => {
    const loadDraft = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(DRAFT_KEY);
        if (jsonValue != null) {
          const draft = JSON.parse(jsonValue);
          setSymptoms(draft.symptoms || '');
          setDiagnosis(draft.diagnosis || '');
          setTreatment(draft.treatment || '');
        }
      } catch(e) {
        // error reading value
      }
    };
    loadDraft();
  }, []);

  const saveDraft = async () => {
    try {
      const draft = { symptoms, diagnosis, treatment };
      await AsyncStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
      setIsDraft(true);
      setTimeout(() => setIsDraft(false), 2000);
    } catch (e) {
      // saving error
    }
  };

  const clearDraft = async () => {
    try {
      await AsyncStorage.removeItem(DRAFT_KEY);
    } catch(e) {}
  };

  const handleSave = () => {
    Alert.alert("Atención Guardada", "La ficha se guardó exitosamente.", [
      { text: "OK", onPress: () => {
          clearDraft();
          navigation.popToTop();
        } 
      }
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container}>
          
          <View style={styles.header}>
            <Text variant="h2" style={styles.title}>Ficha de Juan Pérez Gómez</Text>
            <View style={styles.headerRow}>
              <Text variant="body" style={{color: colors.textSecondary}}>220019283 • Ing. Informática</Text>
              {isDraft && <Text variant="label" style={styles.draftBadge}>Guardado ✓</Text>}
            </View>
          </View>

          <View style={styles.formSection}>
            <Input
              label="Sintomatología"
              placeholder="Describa los síntomas que presenta el estudiante..."
              value={symptoms}
              onChangeText={setSymptoms}
              onBlur={saveDraft}
              multiline={true}
              numberOfLines={4}
            />

            <Input
              label="Diagnóstico Presuntivo/Aprobado"
              placeholder="Ingrese el diagnóstico..."
              value={diagnosis}
              onChangeText={setDiagnosis}
              onBlur={saveDraft}
              multiline={false}
            />

            <Input
              label="Tratamiento y Plan de Acción"
              placeholder="Prescripción médica, reposo, o pasos a seguir..."
              value={treatment}
              onChangeText={setTreatment}
              onBlur={saveDraft}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  draftBadge: {
    color: colors.success,
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

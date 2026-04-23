import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from '../../components/ui/Text';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';
import { RootStackParamList } from '../../navigation/RootNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

export const RegisterScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            
            <View style={styles.header}>
              <Text variant="h1" align="center" style={styles.title}>Crear Cuenta</Text>
              <Text variant="body" align="center" color={colors.textSecondary}>
                Únete a la plataforma de Ugrand Health
              </Text>
            </View>

            <View style={styles.form}>
              <Input
                label="Nombre completo"
                placeholder="Ej. Juan Pérez"
                value={name}
                onChangeText={setName}
              />
              <Input
                label="Correo Institucional"
                placeholder="Ej. juan.perez@uagrm.edu.bo"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
              <Input
                label="Contraseña"
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <View style={styles.registerActions}>
                <Button 
                  title="Crear mi cuenta" 
                  onPress={() => {
                    // Registration Mock
                    navigation.goBack();
                  }} 
                />
              </View>
            </View>

            <View style={styles.footer}>
              <Text variant="label" align="center">
                ¿Ya tienes una cuenta?
              </Text>
              <Button 
                title="Volver a Iniciar Sesión" 
                variant="secondary"
                style={styles.backButton}
                onPress={() => navigation.goBack()} 
              />
            </View>

          </View>
        </TouchableWithoutFeedback>
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
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    color: colors.primary,
    marginBottom: 8,
  },
  form: {
    marginBottom: 32,
  },
  registerActions: {
    marginTop: 24,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 24,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 24,
  },
  backButton: {
    marginTop: 16,
    borderWidth: 0,
    backgroundColor: colors.primaryLight,
  }
});

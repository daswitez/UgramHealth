import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { Text } from '../../components/ui/Text';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../store/AuthContext';
import { colors } from '../../theme/colors';

export const LoginScreen = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (role: 'student' | 'doctor') => {
    if (!email || !password) {
      setError('Por favor, ingresa tus credenciales.');
      return;
    }
    // Simulate API call
    setError('');
    login(role);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.keyboardView} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            
            <View style={styles.header}>
              <Text variant=\"h1\" align=\"center\" style={styles.title}>ugram.health</Text>
              <Text variant=\"body\" align=\"center\" color={colors.textSecondary}>
                Portal Universitario de Salud
              </Text>
            </View>

            <View style={styles.form}>
              <Input
                label=\"Correo institucional o Usuario\"
                placeholder=\"Ej. 200012345\"
                value={email}
                onChangeText={setEmail}
                autoCapitalize=\"none\"
              />
              <Input
                label=\"Contraseña\"
                placeholder=\"••••••••\"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                error={error}
              />

              <View style={styles.loginActions}>
                <Button 
                  title=\"Ingresar como Estudiante\" 
                  onPress={() => handleLogin('student')} 
                />
                <View style={styles.spacing} />
                <Button 
                  title=\"Ingresar como Médico\" 
                  variant=\"secondary\"
                  onPress={() => handleLogin('doctor')} 
                />
              </View>
            </View>

            <View style={styles.footer}>
              <Text variant=\"label\" align=\"center\">
                ¿Necesitas ayuda con tu acceso? Contacta a soporte técnico.
              </Text>
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
    marginBottom: 48,
    alignItems: 'center',
  },
  title: {
    color: colors.primary,
    marginBottom: 8,
  },
  form: {
    marginBottom: 32,
  },
  loginActions: {
    marginTop: 24,
  },
  spacing: {
    height: 16,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 24,
  },
});

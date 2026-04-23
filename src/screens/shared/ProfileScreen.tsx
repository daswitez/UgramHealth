import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useAuth } from '../../store/AuthContext';
import { Text } from '../../components/ui/Text';
import { Button } from '../../components/ui/Button';
import { colors } from '../../theme/colors';

export const ProfileScreen = () => {
  const { userRole, logout } = useAuth();
  
  const isDoctor = userRole === 'doctor';
  
  const userName = isDoctor ? 'Dr. Medardo Justiniano' : 'Juan Pérez Gómez';
  const userAccount = isDoctor ? 'medardo.j@uagrm.edu.bo' : '220019283@uagrm.edu.bo';
  const roleTitle = isDoctor ? 'Médico General' : 'Estudiante Activo';

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitial}>{userName.charAt(0)}</Text>
          </View>
          <Text variant="h2" style={styles.name}>{userName}</Text>
          <Text variant="label" color={colors.primary}>{roleTitle}</Text>
        </View>

        <View style={styles.dataGroup}>
          <Text variant="body" style={styles.groupTitle}>Contacto Institucional</Text>
          <View style={styles.dataRow}>
            <Text variant="label" color={colors.textSecondary}>Correo Electrónico</Text>
            <Text variant="body">{userAccount}</Text>
          </View>
          <View style={styles.dataRow}>
            <Text variant="label" color={colors.textSecondary}>Soporte IT</Text>
            <Text variant="body">soporte.salud@uagrm.edu.bo</Text>
          </View>
        </View>

        <View style={styles.dataGroup}>
          <Text variant="body" style={styles.groupTitle}>Preferencias (Proximamente)</Text>
          <View style={styles.dataRow}>
            <Text variant="label" color={colors.textSecondary}>Notificaciones Push</Text>
            <Text variant="body">Habilitadas</Text>
          </View>
        </View>

        <View style={styles.logoutContainer}>
          <Button 
            title="Cerrar Sesión" 
            variant="secondary"
            onPress={logout} 
          />
          <Text variant="label" color={colors.textSecondary} align="center" style={{marginTop: 16}}>
            Ugram Health Alpha v1.0.0
          </Text>
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
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.surfaceHover,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  avatarInitial: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 28,
    color: colors.primary,
  },
  name: {
    marginBottom: 4,
  },
  dataGroup: {
    marginBottom: 32,
  },
  groupTitle: {
    fontFamily: 'Inter-SemiBold',
    color: colors.textSecondary,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 8,
  },
  dataRow: {
    marginBottom: 16,
  },
  logoutContainer: {
    marginTop: 32,
  }
});

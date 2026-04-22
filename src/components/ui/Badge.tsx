import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Text } from './Text';
import { colors } from '../../theme/colors';

type BadgeStatus = 'success' | 'warning' | 'error' | 'info';

interface BadgeProps {
  label: string;
  status?: BadgeStatus;
  style?: ViewStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  status = 'info',
  style,
}) => {
  const getColors = () => {
    switch (status) {
      case 'success':
        return { bg: '#DCFCE7', text: colors.success }; // Light green bg
      case 'warning':
        return { bg: '#FEF3C7', text: colors.warning }; // Light orange bg
      case 'error':
        return { bg: '#FEE2E2', text: colors.error };   // Light red bg
      case 'info':
      default:
        return { bg: colors.primaryLight, text: colors.info }; // Light blue bg
    }
  };

  const scheme = getColors();

  return (
    <View style={[styles.container, { backgroundColor: scheme.bg }, style]}>
      <Text style={[styles.text, { color: scheme.text }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    lineHeight: 16,
  },
});

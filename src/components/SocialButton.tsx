import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Colors } from '../theme/colors';

interface SocialButtonProps {
  onPress: () => void;
  icon: React.ReactNode;
  style?: ViewStyle;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  onPress,
  icon,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 56,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: Colors.socialBorder,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

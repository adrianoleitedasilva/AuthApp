import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInputProps,
  Platform,
} from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

interface InputFieldProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  isPassword = false,
  error,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, error ? styles.inputError : null]}>
        <TextInput
          style={styles.input}
          secureTextEntry={isPassword && !isVisible}
          placeholderTextColor={Colors.placeholder}
          autoCapitalize="none"
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsVisible(prev => !prev)}
            style={styles.eyeButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.eyeIcon}>{isVisible ? '👁' : '🙈'}</Text>
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    fontSize: Typography.fontSize.sm,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.inputBackground,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: Colors.inputBorder,
    paddingHorizontal: 16,
    height: 56,
  },
  inputError: {
    borderColor: Colors.error,
  },
  input: {
    flex: 1,
    fontSize: Typography.fontSize.md,
    color: Colors.text,
    ...Platform.select({
      android: { paddingVertical: 0 },
    }),
  },
  eyeButton: {
    padding: 4,
  },
  eyeIcon: {
    fontSize: 18,
  },
  errorText: {
    color: Colors.error,
    fontSize: Typography.fontSize.xs,
    marginTop: 4,
    marginLeft: 4,
  },
});

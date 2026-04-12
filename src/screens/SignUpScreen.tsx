import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputField } from '../components/InputField';
import { SocialButton } from '../components/SocialButton';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

// SVG-free icon placeholders (replace with react-native-vector-icons in production)
const FacebookIcon = () => (
  <Text style={[styles.socialIcon, { color: Colors.facebook }]}>f</Text>
);

const GoogleIcon = () => (
  <Text style={[styles.socialIcon, { color: Colors.google }]}>G</Text>
);

const AppleIcon = () => (
  <Text style={[styles.socialIcon, { color: Colors.apple }]}></Text>
);

interface SignUpScreenProps {
  navigation?: any;
}

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accepted, setAccepted] = useState(true);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (!accepted) {
      Alert.alert('Terms', 'Please accept the terms and privacy policy.');
      return;
    }
    if (!validate()) return;
    Alert.alert('Success', `Account created for ${email}`);
  };

  const handleFacebook = () => Alert.alert('Facebook', 'Sign up with Facebook');
  const handleGoogle = () => Alert.alert('Google', 'Sign up with Google');
  const handleApple = () => Alert.alert('Apple', 'Sign up with Apple');

  const handleLogin = () => {
    navigation?.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Logo */}
          <View style={styles.logoContainer}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoText}>L</Text>
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>Sign up</Text>

          {/* Form */}
          <View style={styles.form}>
            <InputField
              label="Email"
              placeholder="Your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              returnKeyType="next"
              error={errors.email}
            />

            <InputField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              isPassword
              returnKeyType="done"
              onSubmitEditing={handleSignUp}
              error={errors.password}
            />

            {/* Checkbox */}
            <TouchableOpacity
              style={styles.checkboxRow}
              onPress={() => setAccepted(prev => !prev)}
              activeOpacity={0.7}
            >
              <View style={[styles.checkbox, accepted && styles.checkboxChecked]}>
                {accepted && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxLabel}>
                I accept the{' '}
                <Text style={styles.checkboxLink}>terms and privacy policy</Text>
              </Text>
            </TouchableOpacity>

            {/* Sign Up Button */}
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
              activeOpacity={0.85}
            >
              <Text style={styles.signUpButtonText}>Sign up</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or Register with</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialRow}>
              <SocialButton
                onPress={handleFacebook}
                icon={<FacebookIcon />}
              />
              <SocialButton
                onPress={handleGoogle}
                icon={<GoogleIcon />}
              />
              <SocialButton
                onPress={handleApple}
                icon={<AppleIcon />}
              />
            </View>
          </View>

          {/* Login Link */}
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleLogin} activeOpacity={0.7}>
              <Text style={styles.loginLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 32,
  },

  // Logo
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 28,
    fontStyle: 'italic',
    color: Colors.text,
    fontWeight: '300',
    fontFamily: Platform.OS === 'ios' ? 'Georgia' : 'serif',
  },

  // Title
  title: {
    fontSize: Typography.fontSize.xxl,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 28,
  },

  // Form
  form: {
    flex: 1,
  },

  // Checkbox
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.inputBorder,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  checkmark: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  },
  checkboxLabel: {
    flex: 1,
    fontSize: Typography.fontSize.sm,
    color: Colors.text,
    fontWeight: '500',
  },
  checkboxLink: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  // Sign Up Button
  signUpButton: {
    height: 58,
    borderRadius: 32,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  signUpButtonText: {
    color: Colors.white,
    fontSize: Typography.fontSize.md,
    fontWeight: '600',
    letterSpacing: 0.3,
  },

  // Divider
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.divider,
  },
  dividerText: {
    fontSize: Typography.fontSize.xs,
    color: Colors.textSecondary,
    fontWeight: '500',
  },

  // Social
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 40,
  },
  socialIcon: {
    fontSize: 22,
    fontWeight: '700',
  },

  // Login
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  loginText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
  },
  loginLink: {
    fontSize: Typography.fontSize.sm,
    color: Colors.text,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

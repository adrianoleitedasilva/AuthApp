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

const FacebookIcon = () => (
  <Text style={[styles.socialIcon, { color: Colors.facebook }]}>f</Text>
);

const GoogleIcon = () => (
  <Text style={[styles.socialIcon, { color: Colors.google }]}>G</Text>
);

const AppleIcon = () => (
  <Text style={[styles.socialIcon, { color: Colors.apple }]}></Text>
);

interface LoginScreenProps {
  navigation?: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;
    Alert.alert('Success', `Welcome back, ${email}!`);
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Reset link will be sent to your email.');
  };

  const handleSignUp = () => {
    navigation?.navigate('SignUp');
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
          <Text style={styles.title}>Log in</Text>

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
              onSubmitEditing={handleLogin}
              error={errors.password}
            />

            {/* Forgot Password */}
            <TouchableOpacity
              style={styles.forgotRow}
              onPress={handleForgotPassword}
              activeOpacity={0.7}
            >
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
              activeOpacity={0.85}
            >
              <Text style={styles.loginButtonText}>Log in</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>Or continue with</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Social Buttons */}
            <View style={styles.socialRow}>
              <SocialButton
                onPress={() => Alert.alert('Facebook', 'Login with Facebook')}
                icon={<FacebookIcon />}
              />
              <SocialButton
                onPress={() => Alert.alert('Google', 'Login with Google')}
                icon={<GoogleIcon />}
              />
              <SocialButton
                onPress={() => Alert.alert('Apple', 'Login with Apple')}
                icon={<AppleIcon />}
              />
            </View>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpRow}>
            <Text style={styles.signUpText}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp} activeOpacity={0.7}>
              <Text style={styles.signUpLink}>Sign up</Text>
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

  // Forgot Password
  forgotRow: {
    alignSelf: 'flex-end',
    marginBottom: 24,
    marginTop: -8,
  },
  forgotText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },

  // Login Button
  loginButton: {
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
  loginButtonText: {
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

  // Sign Up
  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
  },
  signUpText: {
    fontSize: Typography.fontSize.sm,
    color: Colors.textSecondary,
  },
  signUpLink: {
    fontSize: Typography.fontSize.sm,
    color: Colors.text,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

# AuthApp

React Native authentication UI with Sign Up and Login screens, compatible with **Android** and **iOS**.

---

## Screenshots

| Sign Up | Login |
|---------|-------|
| ![Sign Up](docs/signup.png) | ![Login](docs/login.png) |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native 0.76 |
| Language | TypeScript |
| Navigation | React Navigation 6 |
| Safe Area | react-native-safe-area-context |

---

## Project Structure

```
AuthApp/
├── App.tsx                         # Root component
├── src/
│   ├── components/
│   │   ├── InputField.tsx          # Reusable text input with label + password toggle
│   │   └── SocialButton.tsx        # Social login button (Facebook, Google, Apple)
│   ├── navigation/
│   │   └── AppNavigator.tsx        # Stack navigator (SignUp → Login)
│   ├── screens/
│   │   ├── SignUpScreen.tsx         # Registration screen
│   │   └── LoginScreen.tsx         # Login screen
│   └── theme/
│       ├── colors.ts               # Color palette
│       └── typography.ts           # Font sizes and families
├── package.json
└── tsconfig.json
```

---

## Features

- **Sign Up screen**
  - Email and password fields with inline validation
  - Password visibility toggle
  - Terms & privacy policy checkbox
  - Social registration (Facebook, Google, Apple)
  - Navigation to Login

- **Login screen**
  - Email and password fields with inline validation
  - Password visibility toggle
  - Forgot password action
  - Social login (Facebook, Google, Apple)
  - Navigation to Sign Up

- **Cross-platform**
  - `KeyboardAvoidingView` with platform-specific behavior
  - `SafeAreaView` for notch/dynamic island support
  - Platform-specific shadows (iOS) and elevation (Android)
  - Platform-specific font families

---

## Getting Started

### Prerequisites

- Node.js >= 18
- React Native CLI
- **iOS:** Xcode + CocoaPods
- **Android:** Android Studio + JDK 17

### Install

```bash
# Clone the repository
git clone https://github.com/your-username/AuthApp.git
cd AuthApp

# Install dependencies
npm install

# iOS only — install pods
cd ios && pod install && cd ..
```

### Run

```bash
# Start Metro bundler
npm start

# Android
npm run android

# iOS
npm run ios
```

---

## Theme Customization

All colors are centralized in [src/theme/colors.ts](src/theme/colors.ts):

```ts
export const Colors = {
  primary: '#1E1E1E',      // Button + checkbox background
  background: '#FFFFFF',   // Screen background
  inputBackground: '#F7F7F7',
  facebook: '#1877F2',
  google: '#EA4335',
  apple: '#000000',
  // ...
};
```

Font sizes and families are in [src/theme/typography.ts](src/theme/typography.ts).

---

## Validation Rules

| Field | Rule |
|-------|------|
| Email | Required, valid format (`user@domain.com`) |
| Password | Required, minimum 6 characters |
| Terms checkbox | Must be accepted on Sign Up |

---

## Roadmap

- [ ] Integrate real authentication API (JWT)
- [ ] Add AsyncStorage / SecureStore for token persistence
- [ ] Replace emoji icons with `react-native-vector-icons`
- [ ] Add loading states and error feedback from API
- [ ] Dark mode support
- [ ] Biometric login (Face ID / Fingerprint)

---

## License

MIT

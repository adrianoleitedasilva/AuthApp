# AuthApp

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![AuthApp](https://img.shields.io/badge/AuthApp-2c302e?style=for-the-badge&logo=quicklook&logoColor=white)

Interface de autenticação em React Native com telas de Cadastro e Login, compatível com **Android** e **iOS**.

---

## Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Framework | React Native 0.76 |
| Linguagem | TypeScript |
| Navegação | React Navigation 6 |
| Safe Area | react-native-safe-area-context |

---

## Estrutura do Projeto

```
AuthApp/
├── App.tsx                         # Componente raiz
├── src/
│   ├── components/
│   │   ├── InputField.tsx          # Input reutilizável com label + toggle de senha
│   │   └── SocialButton.tsx        # Botão de login social (Facebook, Google, Apple)
│   ├── navigation/
│   │   └── AppNavigator.tsx        # Stack navigator (Cadastro → Login)
│   ├── screens/
│   │   ├── SignUpScreen.tsx         # Tela de cadastro
│   │   └── LoginScreen.tsx         # Tela de login
│   └── theme/
│       ├── colors.ts               # Paleta de cores
│       └── typography.ts           # Tamanhos e famílias de fonte
├── package.json
└── tsconfig.json
```

---

## Funcionalidades

- **Tela de Cadastro**
  - Campos de e-mail e senha com validação inline
  - Toggle de visibilidade da senha
  - Checkbox de termos e política de privacidade
  - Cadastro social (Facebook, Google, Apple)
  - Navegação para o Login

- **Tela de Login**
  - Campos de e-mail e senha com validação inline
  - Toggle de visibilidade da senha
  - Ação de esqueci minha senha
  - Login social (Facebook, Google, Apple)
  - Navegação para o Cadastro

- **Cross-platform**
  - `KeyboardAvoidingView` com comportamento específico por plataforma
  - `SafeAreaView` com suporte a notch e Dynamic Island
  - Sombras nativas no iOS e `elevation` no Android
  - Famílias de fonte específicas por plataforma

---

## Como Rodar

### Pré-requisitos

- Node.js >= 18
- React Native CLI
- **iOS:** Xcode + CocoaPods
- **Android:** Android Studio + JDK 17

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/AuthApp.git
cd AuthApp

# Instalar dependências
npm install

# Somente iOS — instalar pods
cd ios && pod install && cd ..
```

### Execução

```bash
# Iniciar o Metro bundler
npm start

# Android
npm run android

# iOS
npm run ios
```

---

## Personalização de Tema

Todas as cores estão centralizadas em [src/theme/colors.ts](src/theme/colors.ts):

```ts
export const Colors = {
  primary: '#1E1E1E',      // Fundo do botão e checkbox
  background: '#FFFFFF',   // Fundo das telas
  inputBackground: '#F7F7F7',
  facebook: '#1877F2',
  google: '#EA4335',
  apple: '#000000',
  // ...
};
```

Tamanhos e famílias de fonte estão em [src/theme/typography.ts](src/theme/typography.ts).

---

## Regras de Validação

| Campo | Regra |
|-------|-------|
| E-mail | Obrigatório, formato válido (`usuario@dominio.com`) |
| Senha | Obrigatório, mínimo 6 caracteres |
| Checkbox de termos | Deve ser aceito no Cadastro |

---

## Roadmap

- [ ] Integrar API real de autenticação (JWT)
- [ ] Adicionar persistência de token com AsyncStorage / SecureStore
- [ ] Substituir ícones emoji por `react-native-vector-icons`
- [ ] Adicionar estados de carregamento e feedback de erros da API
- [ ] Suporte a modo escuro
- [ ] Login biométrico (Face ID / Impressão digital)

---

## Licença

MIT

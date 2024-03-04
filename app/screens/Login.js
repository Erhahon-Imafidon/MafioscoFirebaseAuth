import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { handleSignUp, handleLogin } from '../helpers/utils';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="lightgrey"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />

          <View style={styles.passWordContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="lightgrey"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!showPassword}
              style={styles.input}
            />

            <TouchableOpacity
              style={styles.showPassword}
              onPress={handleShowPassword}
            >
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color="#297ed7"
              />
            </TouchableOpacity>
          </View>

          {/* Button Container  */}
          {isLoading ? (
            <ActivityIndicator size="large" color="#297ed7" />
          ) : (
            <View style={styles.buttonContainer}>
              <Button
                title={'Login'}
                titleStyle={styles.buttonText}
                buttonStyle={styles.button}
                containerStyle={styles.buttonOuterStyle}
                onPress={() =>
                  handleLogin(
                    email,
                    password,
                    setIsLoading,
                    setEmail,
                    setPassword
                  )
                }
              />

              <Button
                title={'SignUp'}
                titleStyle={[styles.buttonText, styles.buttonTextOutline]}
                buttonStyle={[styles.button, styles.buttonOutline]}
                containerStyle={styles.buttonOuterStyle}
                onPress={() =>
                  handleSignUp(
                    email,
                    password,
                    setIsLoading,
                    setPassword,
                    setEmail
                  )
                }
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 10,
    width: '90%',
  },

  passWordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  showPassword: {
    position: 'absolute',
    right: 10,
    bottom: 20,
  },

  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  button: {
    backgroundColor: '#297ed7',
    padding: 12,
    borderRadius: 10,
  },

  buttonOuterStyle: {
    width: '60%',
    marginBottom: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  buttonOutline: {
    backgroundColor: 'white',
    borderColor: '#297ed7',
    borderWidth: 2,
  },
  buttonTextOutline: {
    color: '#297ed7',
  },
});

export default LoginScreen;

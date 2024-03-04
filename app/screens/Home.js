import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Button } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const userSignOut = await signOut(auth);
      console.log('userSignOut Successfully:', userSignOut);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Active Email: {auth.currentUser?.email}</Text>

        {isLoading ? (
          <ActivityIndicator size="large" color="#297ed7" />
        ) : (
          <Button
            title={'Logout'}
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonOuterStyle}
            onPress={handleLogout}
          />
        )}
      </View>
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

  button: {
    backgroundColor: '#297ed7',
    padding: 12,
    borderRadius: 10,
  },

  buttonOuterStyle: {
    width: '60%',
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;

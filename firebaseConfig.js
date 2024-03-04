// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAeE879OO7WZpbwq8fdoYeSNAAOX0mPKAU',
  authDomain: 'mafioscofirebaseauth.firebaseapp.com',
  projectId: 'mafioscofirebaseauth',
  storageBucket: 'mafioscofirebaseauth.appspot.com',
  messagingSenderId: '182053116083',
  appId: '1:182053116083:web:7d22501dfab56216c8b8c6',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

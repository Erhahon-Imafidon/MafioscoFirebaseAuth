import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export const handleSignUp = async (
  email,
  password,
  setIsLoading,
  setPassword,
  setEmail
) => {
  setIsLoading(true);
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setEmail('');
    setPassword('');
    alert('You have been Registered  Successfully');
    console.log(response);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      alert('There is a user Already signup with this email address');
      setEmail('');
      setPassword('');
    }
    console.log(error.message);
  } finally {
    setIsLoading(false);
  }
};

export const handleLogin = async (
  email,
  password,
  setIsLoading,
  setEmail,
  setPassword
) => {
  setIsLoading(true);
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    setEmail('');
    setPassword('');
    alert('You have been Logged in Successfully');
    console.log(response);
  } catch (error) {
    alert('Invalid Email or Password');
    console.log(error.message);
  } finally {
    setIsLoading(false);
  }
};

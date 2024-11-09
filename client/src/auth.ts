import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  UserCredential,
} from "firebase/auth";

// Define the type of email and password as strings and return a Promise with UserCredential
export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Define the type of email and password as strings and return a Promise with UserCredential
export const doSignInWithEmailAndPassword = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};


// Define the type of the sign-out function to return a Promise<void>
export const doSignOut = (): Promise<void> => {
  return auth.signOut();
};

// Define the type of the password reset function with email as a string and return a Promise<void>
export const doPasswordReset = (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};

// Define the type of the password change function with password as a string and return a Promise<void>
export const doPasswordChange = (password: string): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("No authenticated user to update the password.");
  }
  return updatePassword(auth.currentUser, password);
};

// Define the type of the email verification function to return a Promise<void>
export const doSendEmailVerification = (): Promise<void> => {
  if (!auth.currentUser) {
    throw new Error("No authenticated user to send the verification email.");
  }
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

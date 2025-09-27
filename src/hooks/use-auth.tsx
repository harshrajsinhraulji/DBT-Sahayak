
"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, type User, getAuth } from 'firebase/auth';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { LoaderCircle } from 'lucide-react';

// Manually provided Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBUjfBxveru9rBX_6wyOQvGY5dNeZ3Vx4c",
  authDomain: "dbt-sahayak-database.firebaseapp.com",
  projectId: "dbt-sahayak-database",
  storageBucket: "dbt-sahayak-database.firebasestorage.app",
  messagingSenderId: "36334179231",
  appId: "1:36334179231:web:5fd14a0515801ec918a3aa",
  measurementId: "G-QMET9YF77M"
};

// Initialize Firebase directly in this file
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);


interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, pass: string) => Promise<any>;
  signup: (email: string, pass: string, name: string) => Promise<any>;
  logout: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (email: string, pass: string) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const signup = async (email: string, pass: string, name: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: name });
        // Manually update the user state as onAuthStateChanged might not be immediate
        setUser({ ...userCredential.user, displayName: name });
    }
    return userCredential;
  };
  

  const logout = () => {
    return signOut(auth);
  };
  
  const value = useMemo(() => ({
    user,
    loading,
    login,
    signup,
    logout,
  }), [user, loading]);

  if (loading) {
    return (
        <div className="flex items-center justify-center h-screen">
            <LoaderCircle className="w-12 h-12 animate-spin text-primary" />
        </div>
    )
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

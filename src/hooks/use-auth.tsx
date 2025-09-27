
"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { LoaderCircle } from 'lucide-react';

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

    
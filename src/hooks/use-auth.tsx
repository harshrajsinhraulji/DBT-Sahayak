
"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, type User } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { LoaderCircle } from 'lucide-react';

// Define the admin email address
const ADMIN_EMAIL = "admin@dbtsahayak.com";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  login: (email: string, pass: string) => Promise<any>;
  signup: (email: string, pass: string, name: string) => Promise<any>;
  logout: () => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsAdmin(user?.email === ADMIN_EMAIL);
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
        setIsAdmin(userCredential.user.email === ADMIN_EMAIL);
    }
    return userCredential;
  };
  

  const logout = () => {
    return signOut(auth);
  };
  
  const value = useMemo(() => ({
    user,
    loading,
    isAdmin,
    login,
    signup,
    logout,
  }), [user, loading, isAdmin]);

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

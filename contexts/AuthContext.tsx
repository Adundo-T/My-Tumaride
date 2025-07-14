import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'sender' | 'mover' | null;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateUserRole: (role: 'sender' | 'mover') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading user:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveUser = async (userData: User) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      const userData: User = {
        id: '1',
        email,
        name: email.split('@')[0],
        role: null, // Will be set after role selection
      };
      await saveUser(userData);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      // Simulate API call
      const userData: User = {
        id: Date.now().toString(),
        email,
        name,
        role: null, // Will be set after role selection
      };
      await saveUser(userData);
    } catch (error) {
      throw new Error('Signup failed');
    }
  };

  const loginWithGoogle = async () => {
    try {
      // Simulate Google login
      const userData: User = {
        id: Date.now().toString(),
        email: 'user@gmail.com',
        name: 'Google User',
        role: null,
      };
      await saveUser(userData);
    } catch (error) {
      throw new Error('Google login failed');
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const updateUserRole = async (role: 'sender' | 'mover') => {
    if (user) {
      const updatedUser = { ...user, role };
      await saveUser(updatedUser);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        loginWithGoogle,
        logout,
        updateUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
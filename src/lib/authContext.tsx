'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'student' | 'landlord' | 'admin';

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  compoundName?: string;
  university?: string;
  phone?: string;
  avatar?: string;
}

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (data: SignupData) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

export interface SignupData {
  fullName: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
  university?: string;
  compoundName?: string;
}

const DEMO_USERS: (AuthUser & {password: string;})[] = [
{
  id: 'user-001',
  fullName: 'Chipo Mwanza',
  email: 'chipo@student.unza.zm',
  password: 'UniBoard@2026',
  role: 'student',
  university: 'UNZA',
  phone: '+260 97 111 2222',
  avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_10a397da6-1772094815227.png'
},
{
  id: 'user-002',
  fullName: 'Chanda Mwale',
  email: 'chanda@mwaleresidences.zm',
  password: 'LandlordPass#88',
  role: 'landlord',
  compoundName: 'Mwale Student Residences',
  phone: '+260 97 123 4567',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9a3e041-1768577277093.png"
},
{
  id: 'user-003',
  fullName: 'Admin UniBoard',
  email: 'admin@uniboard.zm',
  password: 'AdminSecure$99',
  role: 'admin',
  avatar: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e5336137-1771896332044.png'
}];


const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: {children: ReactNode;}) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('uniboard_user');
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem('uniboard_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 1000));
    const found = DEMO_USERS.find((u) => u.email === email && u.password === password);
    if (found) {
      const { password: _p, ...userData } = found;
      setUser(userData);
      localStorage.setItem('uniboard_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const signup = async (data: SignupData): Promise<boolean> => {
    await new Promise((r) => setTimeout(r, 1200));
    const newUser: AuthUser = {
      id: `user-${Date.now()}`,
      fullName: data.fullName,
      email: data.email,
      role: data.role,
      phone: data.phone,
      university: data.university,
      compoundName: data.compoundName
    };
    setUser(newUser);
    localStorage.setItem('uniboard_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('uniboard_user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>);

}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
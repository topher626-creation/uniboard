'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Mail, Lock, User, Phone, GraduationCap, Loader2, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth, UserRole } from '@/lib/authContext';

type SignupFormData = {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  compoundName: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

type Role = 'student' | 'landlord';

const zambianUniversities = [
  'University of Zambia (UNZA)',
  'Copperbelt University (CBU)',
  'Mukuba University (MUKUBA)',
  'Mulungushi University',
  'Kwame Nkrumah University',
  'University of Lusaka (UNILUS)',
  'Other',
];

type Props = { onSwitchToLogin: () => void };

export default function SignupForm({ onSwitchToLogin }: Props) {
  const router = useRouter();
  const { signup } = useAuth();
  const [role, setRole] = useState<Role>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<SignupFormData>();
  const passwordValue = watch('password');

  const onSubmit = async (data: SignupFormData) => {
    const success = await signup({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
      role: role as UserRole,
      phone: data.phone,
      university: role === 'student' ? data.university : undefined,
      compoundName: role === 'landlord' ? data.compoundName : undefined,
    });
    if (success) {
      if (role === 'landlord') router.push('/landlord-dashboard');
      else router.push('/student-dashboard');
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1.5">Create your account</h1>
        <p className="text-gray-500 text-sm">Join UniBoard Zambia — it&apos;s free</p>
      </div>

      {/* Role Selector */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-2.5">I am a...</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-150 ${
              role === 'student' ? 'border-green-600 bg-green-50 text-green-700' : 'border-gray-200 bg-white text-gray-600 hover:border-green-200'
            }`}
          >
            <GraduationCap size={24} className={role === 'student' ? 'text-green-600' : 'text-gray-400'} />
            <div className="text-center">
              <p className="font-bold text-sm">Student</p>
              <p className="text-xs text-gray-400 mt-0.5">Looking for accommodation</p>
            </div>
          </button>
          <button
            type="button"
            onClick={() => setRole('landlord')}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-150 ${
              role === 'landlord' ? 'border-amber-500 bg-amber-50 text-amber-700' : 'border-gray-200 bg-white text-gray-600 hover:border-amber-200'
            }`}
          >
            <Building2 size={24} className={role === 'landlord' ? 'text-amber-600' : 'text-gray-400'} />
            <div className="text-center">
              <p className="font-bold text-sm">Provider / Landlord</p>
              <p className="text-xs text-gray-400 mt-0.5">Listing a bedspace</p>
            </div>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="e.g. Chipo Mwanza"
              className={`input-base pl-9 ${errors.fullName ? 'border-red-400' : ''}`}
              {...register('fullName', { required: 'Full name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
            />
          </div>
          {errors.fullName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="email"
              placeholder={role === 'student' ? 'you@university.zm' : 'you@yourbusiness.zm'}
              className={`input-base pl-9 ${errors.email ? 'border-red-400' : ''}`}
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' } })}
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="tel"
              placeholder="+260 97 000 0000"
              className={`input-base pl-9 ${errors.phone ? 'border-red-400' : ''}`}
              {...register('phone', { required: 'Phone number is required' })}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone.message}</p>}
        </div>

        {/* University — students only */}
        {role === 'student' && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">University</label>
            <div className="relative">
              <GraduationCap size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <select
                className={`input-base pl-9 appearance-none cursor-pointer ${errors.university ? 'border-red-400' : ''}`}
                {...register('university', { required: role === 'student' ? 'Please select your university' : false })}
              >
                <option value="">Select your university</option>
                {zambianUniversities.map((u) => (
                  <option key={`signup-univ-${u}`} value={u}>{u}</option>
                ))}
              </select>
            </div>
            {errors.university && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.university.message}</p>}
          </div>
        )}

        {/* Compound / Business Name — landlords only */}
        {role === 'landlord' && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Compound / Business Name <span className="text-red-500">*</span>
            </label>
            <p className="text-xs text-gray-400 mb-1.5">This will be displayed prominently on your provider dashboard</p>
            <div className="relative">
              <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500 pointer-events-none" />
              <input
                type="text"
                placeholder="e.g. Mwale Student Residences"
                className={`input-base pl-9 border-amber-300 focus:border-amber-500 focus:ring-amber-200 ${errors.compoundName ? 'border-red-400' : ''}`}
                {...register('compoundName', { required: role === 'landlord' ? 'Compound/Business name is required' : false })}
              />
            </div>
            {errors.compoundName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.compoundName.message}</p>}
          </div>
        )}

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              className={`input-base pl-9 pr-10 ${errors.password ? 'border-red-400' : ''}`}
              {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' } })}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password</label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Repeat your password"
              className={`input-base pl-9 pr-10 ${errors.confirmPassword ? 'border-red-400' : ''}`}
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (v) => v === passwordValue || 'Passwords do not match',
              })}
            />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.confirmPassword.message}</p>}
        </div>

        {/* Terms */}
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 accent-green-600 rounded cursor-pointer mt-0.5" {...register('agreeTerms', { required: 'You must agree to the terms' })} />
          <span className="text-sm text-gray-600">I agree to UniBoard&apos;s <span className="text-green-700 font-semibold">Terms of Service</span> and <span className="text-green-700 font-semibold">Privacy Policy</span></span>
        </label>
        {errors.agreeTerms && <p className="text-red-500 text-xs font-medium">{errors.agreeTerms.message}</p>}

        {role === 'landlord' && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
            <p className="text-amber-800 text-xs font-medium">⚠️ Provider accounts require admin verification before listings go live. Our team will review your documents within 24-48 hours.</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-all duration-150 active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {isSubmitting ? <><Loader2 size={18} className="animate-spin" />Creating account...</> : 'Create Account'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-5">
        Already have an account?{' '}
        <button onClick={onSwitchToLogin} className="text-green-700 font-semibold hover:underline">Log in</button>
      </p>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Eye, EyeOff, Mail, Lock, User, Phone, GraduationCap, Loader2, Building2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

type SignupFormData = {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
};

type Role = 'student' | 'landlord';

const universities = [
  'University of Cape Town (UCT)',
  'University of the Witwatersrand (Wits)',
  'University of Pretoria (UP)',
  'University of Johannesburg (UJ)',
  'University of KwaZulu-Natal (UKZN)',
  'Stellenbosch University (SU)',
  'Cape Peninsula University of Technology (CPUT)',
  'Tshwane University of Technology (TUT)',
  'University of the Western Cape (UWC)',
  'Nelson Mandela University (NMU)',
  'Other',
];

type Props = {
  onSwitchToLogin: () => void;
};

export default function SignupForm({ onSwitchToLogin }: Props) {
  const router = useRouter();
  const [role, setRole] = useState<Role>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>();

  const passwordValue = watch('password');

  const onSubmit = async (data: SignupFormData) => {
    // Backend integration: POST /api/auth/register { ...data, role }
    await new Promise((r) => setTimeout(r, 1400));
    toast.success(
      `Account created! Welcome to UniBoard, ${data.fullName.split(' ')[0]}. Check your email to verify your account.`
    );
    router.push('/home');
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1.5">Create your account</h1>
        <p className="text-gray-500 text-sm">Join UniBoard — it&apos;s free</p>
      </div>

      {/* Role Selector */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-2.5">I am a...</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-150 ${
              role === 'student' ?'border-blue-600 bg-blue-50 text-blue-700' :'border-gray-200 bg-white text-gray-600 hover:border-blue-200 hover:bg-blue-50/50'
            }`}
          >
            <GraduationCap size={24} className={role === 'student' ? 'text-blue-600' : 'text-gray-400'} />
            <div className="text-center">
              <p className="font-bold text-sm">Student</p>
              <p className="text-xs text-gray-400 mt-0.5">Looking for accommodation</p>
            </div>
            {role === 'student' && (
              <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            )}
          </button>

          <button
            type="button"
            onClick={() => setRole('landlord')}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-150 ${
              role === 'landlord' ?'border-violet-600 bg-violet-50 text-violet-700' :'border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:bg-violet-50/50'
            }`}
          >
            <Building2 size={24} className={role === 'landlord' ? 'text-violet-600' : 'text-gray-400'} />
            <div className="text-center">
              <p className="font-bold text-sm">Landlord</p>
              <p className="text-xs text-gray-400 mt-0.5">Listing a property</p>
            </div>
            {role === 'landlord' && (
              <div className="w-4 h-4 rounded-full bg-violet-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Social Auth */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        <button
          type="button"
          onClick={() => toast.info('Google OAuth coming soon')}
          className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-150"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Google
        </button>
        <button
          type="button"
          onClick={() => toast.info('GitHub OAuth coming soon')}
          className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 active:scale-95 transition-all duration-150"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-800" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400 font-medium">or register with email</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Full Name
          </label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="e.g. Nomvula Khumalo"
              className={`input-base pl-9 ${errors.fullName ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
              {...register('fullName', {
                required: 'Full name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' },
              })}
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email Address
          </label>
          <p className="text-xs text-gray-400 mb-1.5">
            {role === 'student' ?'Use your university email for faster verification' :'Use your business or personal email'}
          </p>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="email"
              placeholder={role === 'student' ? 'you@university.ac.za' : 'you@yourbusiness.co.za'}
              className={`input-base pl-9 ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone Number
          </label>
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type="tel"
              placeholder="+27 82 000 0000"
              className={`input-base pl-9 ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[+\d\s\-()]{8,15}$/,
                  message: 'Enter a valid phone number',
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone.message}</p>
          )}
        </div>

        {/* University — only for students */}
        {role === 'student' && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              University
            </label>
            <p className="text-xs text-gray-400 mb-1.5">
              We use this to show you listings near your campus
            </p>
            <div className="relative">
              <GraduationCap size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <select
                className={`input-base pl-9 appearance-none cursor-pointer ${errors.university ? 'border-red-400' : ''}`}
                {...register('university', {
                  required: role === 'student' ? 'Please select your university' : false,
                })}
              >
                <option value="">Select your university</option>
                {universities.map((u) => (
                  <option key={`signup-univ-${u}`} value={u}>{u}</option>
                ))}
              </select>
            </div>
            {errors.university && (
              <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.university.message}</p>
            )}
          </div>
        )}

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Password
          </label>
          <p className="text-xs text-gray-400 mb-1.5">
            At least 8 characters with a number and special character
          </p>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              className={`input-base pl-9 pr-10 ${errors.password ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  message: 'Password must include a number and a special character',
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Confirm Password
          </label>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            <input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Repeat your password"
              className={`input-base pl-9 pr-10 ${errors.confirmPassword ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : ''}`}
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (val) => val === passwordValue || 'Passwords do not match',
              })}
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* Terms */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 accent-blue-600 rounded cursor-pointer mt-0.5 flex-shrink-0"
              {...register('agreeTerms', {
                required: 'You must agree to the terms to create an account',
              })}
            />
            <span className="text-sm text-gray-600 leading-relaxed">
              I agree to UniBoard&apos;s{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.agreeTerms.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex items-center justify-center gap-2 py-3 text-base font-semibold rounded-xl text-white shadow-sm transition-all duration-150 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed ${
            role === 'student' ?'bg-blue-600 hover:bg-blue-700' :'bg-violet-600 hover:bg-violet-700'
          }`}
          style={{ minHeight: '48px' }}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Creating account...
            </>
          ) : (
            `Create ${role === 'student' ? 'Student' : 'Landlord'} Account`
          )}
        </button>
      </form>

      {/* Switch to Login */}
      <p className="text-center text-sm text-gray-500 mt-5">
        Already have an account?{' '}
        <button
          onClick={onSwitchToLogin}
          className="text-blue-600 font-semibold hover:underline"
        >
          Log in
        </button>
      </p>
    </div>
  );
}
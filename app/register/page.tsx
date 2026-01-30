'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail, Lock, User, Chrome, Facebook, Apple, Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("[v0] Registration attempt:", formData)
    setTimeout(() => setIsLoading(false), 2000)
  }

  const handleSocialLogin = (provider: string) => {
    console.log("[v0] Social signup:", provider)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Form */}
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                  Create Your
                  <span className="block">Account</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                Join thousands of talented professionals and start your journey today
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-12 rounded-full px-6 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 rounded-full px-6 text-base"
                  required
                />
              </div>

              <div className="space-y-2 relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12 rounded-full px-6 text-base pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="space-y-2 relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="h-12 rounded-full px-6 text-base pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 mt-6"
              >
                Create Account
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            {/* Terms */}
            <p className="text-sm text-muted-foreground text-center">
              By creating an account, you agree to our{' '}
              <Link href="#" className="text-primary hover:text-primary/90 font-semibold">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>

        {/* Right Column - Social Signup */}
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-center font-semibold text-foreground mb-4">Or sign up with</p>

          <Button
            onClick={() => handleSocialLogin('google')}
            className="h-12 rounded-full border border-border bg-background hover:bg-muted text-foreground font-semibold text-base flex items-center justify-center gap-3"
          >
            <Chrome className="w-5 h-5" />
            Sign up with Gmail Account
          </Button>

          <Button
            onClick={() => handleSocialLogin('facebook')}
            className="h-12 rounded-full border border-border bg-background hover:bg-muted text-foreground font-semibold text-base flex items-center justify-center gap-3"
          >
            <Facebook className="w-5 h-5" />
            Sign up Facebook Account
          </Button>

          <Button
            onClick={() => handleSocialLogin('apple')}
            className="h-12 rounded-full border border-border bg-background hover:bg-muted text-foreground font-semibold text-base flex items-center justify-center gap-3"
          >
            <Apple className="w-5 h-5" />
            Sign up Apple Secure ID
          </Button>

          {/* Sign In Link */}
          <div className="pt-4 text-center">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:text-primary/90 font-semibold transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

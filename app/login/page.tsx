'use client'

import React from "react"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Mail, Lock, Chrome, Facebook, Apple } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("[v0] Login attempt:", { email, password })
    setTimeout(() => setIsLoading(false), 2000)
  }

  const handleSocialLogin = (provider: string) => {
    console.log("[v0] Social login:", provider)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Form */}
        <div className="flex flex-col justify-center">
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="inline-block">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                  Login to Your
                  <span className="block">Account</span>
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-md">
                Uncover the Untapped Potential of Your Growth to Connect with Clients
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Phone / Email / ArtistID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-full px-6 text-base"
                  required
                />
              </div>

              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Passcode"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-full px-6 text-base"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 mt-6"
              >
                Login to Your Account
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>

            {/* Forgot Password */}
            <div className="text-center">
              <Link href="/forgot-password" className="text-foreground hover:text-primary font-medium transition-colors">
                Forgot Passcode?
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Social Login */}
        <div className="flex flex-col justify-center space-y-4">
          <Button
            onClick={() => handleSocialLogin('google')}
            className="h-12 rounded-full border border-border bg-background hover:bg-muted text-foreground font-semibold text-base flex items-center justify-center gap-3"
          >
            <Chrome className="w-5 h-5" />
            Sign in with Gmail Account
          </Button>

          <Button
            onClick={() => handleSocialLogin('facebook')}
            className="h-12 rounded-full border border-border bg-background hover:bg-muted text-foreground font-semibold text-base flex items-center justify-center gap-3"
          >
            <Facebook className="w-5 h-5" />
            Sign in Facebook Account
          </Button>

          <Button
            onClick={() => handleSocialLogin('apple')}
            className="h-12 rounded-full border border-border bg-background hover:bg-muted text-foreground font-semibold text-base flex items-center justify-center gap-3"
          >
            <Apple className="w-5 h-5" />
            Sign in Apple Secure ID
          </Button>

          {/* Sign Up Link */}
          <div className="pt-4 text-center">
            <p className="text-muted-foreground">
              Dont have an account?{' '}
              <Link href="/register" className="text-primary hover:text-primary/90 font-semibold transition-colors">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

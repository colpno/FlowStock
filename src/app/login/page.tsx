"use client";

import { useState } from "react";

import { MaterialIcon } from "@/components/material-icon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-surface p-6 selection:bg-primary-container selection:text-on-primary-container">
      {/* Subtle atmospheric background effect */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-40">
        <div className="absolute -top-[10%] -left-[5%] h-[40%] w-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-[5%] -bottom-[10%] h-[30%] w-[30%] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      {/* Main Login Container */}
      <div className="relative z-10 w-full max-w-[420px]">
        {/* Brand Identity */}
        <div className="mb-8 flex flex-col items-center space-y-2">
          <div className="flex items-center space-x-2">
            <MaterialIcon className="text-[40px] text-primary-container" fill>
              inventory_2
            </MaterialIcon>
            <h1 className="typo-headline-xl tracking-tight text-on-surface">FlowStock</h1>
          </div>
          <p className="typo-label-md tracking-widest text-on-surface-variant uppercase">
            Order Management System v2.4
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm">
          <div className="mb-8 space-y-1 text-center sm:text-left">
            <h2 className="typo-headline-lg text-on-surface">Secure Sign In</h2>
            <p className="typo-body-sm text-on-surface-variant">
              Enter your credentials to access the dashboard
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block typo-label-md text-on-surface">
                Work Email
              </label>
              <div className="group relative">
                <MaterialIcon
                  className="pointer-events-none absolute inset-y-0 top-1/2 left-0 -translate-y-1/2 pl-3 text-on-surface-variant group-focus-within:text-primary"
                  size={20}
                >
                  mail
                </MaterialIcon>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block typo-label-md text-on-surface">
                  Password
                </label>
                <a href="#" className="typo-label-md text-primary transition-all hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="group relative">
                <MaterialIcon
                  className="pointer-events-none absolute inset-y-0 top-1/2 left-0 -translate-y-1/2 pl-3 text-on-surface-variant group-focus-within:text-primary"
                  size={20}
                >
                  lock
                </MaterialIcon>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  className="pr-10 pl-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  <MaterialIcon size={20}>
                    {showPassword ? "visibility_off" : "visibility"}
                  </MaterialIcon>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <Checkbox id="remember" className="h-4 w-4" />
              <label
                htmlFor="remember"
                className="ml-2 cursor-pointer typo-body-sm text-on-surface-variant select-none"
              >
                Remember this device for 30 days
              </label>
            </div>

            {/* Primary CTA */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center space-x-2 bg-primary-container text-on-primary-container hover:bg-primary"
            >
              <span>{isSubmitting ? "Verifying..." : "Sign In"}</span>
              <MaterialIcon>{isSubmitting ? "sync" : "login"}</MaterialIcon>
            </Button>
          </form>

          {/* Secondary Option */}
          <div className="mt-8 border-t border-outline-variant pt-6 text-center">
            <p className="mb-4 typo-body-sm text-on-surface-variant">
              New staff member or warehouse operator?
            </p>
            <Button variant="outline" className="w-full">
              Request Access
            </Button>
          </div>
        </div>

        {/* Footer Help */}
        <footer className="mt-8 space-y-4 text-center">
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="typo-label-sm tracking-tighter text-on-surface-variant uppercase hover:text-primary"
            >
              Support
            </a>
            <a
              href="#"
              className="typo-label-sm tracking-tighter text-on-surface-variant uppercase hover:text-primary"
            >
              Status
            </a>
            <a
              href="#"
              className="typo-label-sm tracking-tighter text-on-surface-variant uppercase hover:text-primary"
            >
              Privacy
            </a>
          </div>
          <p className="typo-label-sm text-outline">
            © 2024 FlowStock Logistics Solutions Inc. All rights reserved.
          </p>
        </footer>
      </div>

      {/* Side Image Decoration (Hidden on small screens) */}
      <div className="fixed top-1/2 right-10 hidden aspect-square w-[450px] -translate-y-1/2 overflow-hidden rounded-full border border-outline-variant/30 opacity-60 xl:block">
        <img
          className="h-full w-full object-cover"
          alt="Automated logistics warehouse"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXns1hJipKpgs6a_zBZKY7dSUPfkY4r4NSeHYy2UcMEhmo11UNHIhkRZLMfFZeahf2zaLbjX21ciyMhFNEPtmfoC0Sw7yLLf5OZ-H61r7Gs5TzTZIODKbGvptLs4BVxyjOD90mxVUqawUHhBYhXJNAHuivgF6Pl72pmaQZQuy2migw8GNgpiM1jXRXbEo_9dhCRbPih2fotKI4qkGVhenJFfP9vFxab5LSI3Q5lLKXjOEJ1YdIOOJHAlTaQX9NQb555emJ3k4546I"
        />
      </div>
    </main>
  );
}

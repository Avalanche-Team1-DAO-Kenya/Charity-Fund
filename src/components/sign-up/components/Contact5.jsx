"use client";

import { Button, Checkbox, Input, Label } from "@relume_io/relume-ui";
import React from "react";

export function Contact5() {
  return (
    <section id="signup" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 lg:gap-y-16">
          <div>
          <form className="grid grid-cols-1 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="fullName" className="mb-2">
                Full Name
              </Label>
              <Input type="text" id="fullName" placeholder="Enter your full name" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email Address
              </Label>
              <Input type="email" id="email" placeholder="Enter your email address" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="password" className="mb-2">
                Password
              </Label>
              <Input type="password" id="password" placeholder="Create a password" />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="confirmPassword" className="mb-2">
                Confirm Password
              </Label>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter your password"
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="walletAddress" className="mb-2">
                Wallet Address (Optional)
              </Label>
              <Input
                type="text"
                id="walletAddress"
                placeholder="Enter your wallet address"
              />
            </div>
            <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="cursor-pointer">
                I agree to the Terms and Community Guidelines
              </Label>
            </div>
            <div>
              <Button title="Sign Up">Sign Up</Button>
            </div>
          </form>
          <p className="mt-4 text-sm text-center">
              I have an account!{" "}
              <a href="/sign-in" className="text-primary hover:underline">
                Sign In here
              </a>.
            </p>
            </div>
        </div>
      </div>
    </section>
  );
}

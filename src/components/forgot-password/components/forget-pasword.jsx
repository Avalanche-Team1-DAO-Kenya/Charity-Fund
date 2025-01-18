"use client";

import { Button, Input, Label } from "@relume_io/relume-ui";
import React from "react";

export function ForgotPassword() {
  return (
    <section id="forgot-password" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="mb-6 text-5xl font-bold leading-[1.2] md:mb-8 md:text-6xl lg:text-7xl">
          Forgot Password?
        </h2>
        <p className="mb-6 text-md">
          Enter your email address, and we will send you a link to reset your password.
        </p>
        <form className="grid grid-cols-1 gap-y-6">
          <div className="text-left">
            <Label htmlFor="email" className="mb-2 block">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>
          <div>
            <Button
              title="Send Reset Link"
              variant="primary"
              size="md"
              className="w-full py-3"
              style={{ marginBottom: "0.5rem" }}
            >
              Send Reset Link
            </Button>
          </div>
        </form>
        <p className="mt-6 text-sm">
          Remember your password?{" "}
          <a href="/sign-in" className="text-primary hover:underline">
            Sign In here
          </a>.
        </p>
      </div>
    </section>
  );
}

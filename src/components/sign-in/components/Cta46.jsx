"use client";

import { Button, Input, Label } from "@relume_io/relume-ui";
import React from "react";

export function Cta46() {
  return (
    <section id="signin" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-6 border border-border-primary p-8 md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20 lg:p-12">
          <div className="w-full max-w-sm">
            <form className="grid grid-cols-1 gap-y-6">
              <div className="grid w-full items-center">
                            <Label htmlFor="email" className="mb-2">
                              Email Address
                            </Label>
                            <Input type="email" id="email" placeholder="Enter your email address" className="w-full" />
                          </div>
                          <div className="grid w-full items-center">
              <Label htmlFor="password" className="mb-2">
                Password
              </Label>
              <Input type="password" id="password" placeholder="Enter your password" className="w-full" />
            </div>
              <div className="flex justify-between text-sm">
                <a
                  href="/forgot-password"
                  className="text-primary hover:underline"
                  style={{ marginTop: "2 rem" }}
                >
                  Forgot Password?
                </a>
              </div>
              <div>
                <Button
                  title="Log In"
                  variant="primary"
                  size="md"
                  className="w-full justify-center py-3"
                >
                  Log In
                </Button>
              </div>
            </form>
            <p className="mt-4 text-xs text-center">
              By clicking Log In, you agree to our{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms and Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>.
            </p>
            <p className="mt-4 text-sm text-center">
              Don't have an account?{" "}
              <a href="/sign-up" className="text-primary hover:underline">
                Sign Up here
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

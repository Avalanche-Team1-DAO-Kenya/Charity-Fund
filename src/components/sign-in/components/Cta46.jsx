"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React from "react";

export function Cta46() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-6 border border-border-primary p-8 md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20 lg:p-12">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                Welcome Back to CharityFund
              </h3>
              <p className="md:text-md">
                Access your account to continue making a difference.
              </p>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <form className="rb-4 mb-4 grid w-full max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button
                title="Sign In"
                variant="primary"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Sign In
              </Button>
            </form>
            <p className="text-xs">
              By clicking Sign In, you agree to our Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

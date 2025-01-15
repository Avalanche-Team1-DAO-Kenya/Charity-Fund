"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Sign In with Social Media
        </h2>
        <p className="md:text-md">
          Easily connect with your social accounts for a seamless sign-in
          experience.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Sign In">Sign In</Button>
          <Button title="Register" variant="secondary">
            Register
          </Button>
        </div>
      </div>
    </section>
  );
}

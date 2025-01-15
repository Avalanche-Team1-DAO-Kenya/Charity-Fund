"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
          Discover and Support New Causes
        </h2>
        <p className="md:text-md">
          Join our community to propose initiatives and invite friends to make a
          difference together.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button title="Explore">Explore</Button>
          <Button title="Invite" variant="secondary">
            Invite
          </Button>
        </div>
      </div>
    </section>
  );
}

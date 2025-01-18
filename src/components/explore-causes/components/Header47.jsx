"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="donation-header" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Explore Causes</p>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Explore Causes & Make an Impact
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="md:text-md">
              Browse projects and initiatives needing your support. Your
              contribution makes a real difference.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <input
                type="text"
                placeholder="Search causes by name, category, or keyword..."
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <Button variant="secondary">🔍</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

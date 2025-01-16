"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout117() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Impact</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Transforming Charity Through Transparency and Trust
            </h3>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              Join us in making a difference. Together, we can empower
              communities and support meaningful causes.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  100%
                </h3>
                <p>Total Donations Made: $1,000,000</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  75%
                </h3>
                <p>Active Causes Supported: 150</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button variant="primary">Learn More</Button>
              <Button variant="secondary">Explore</Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}

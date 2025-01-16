"use client";

import React from "react";

export function Layout218() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Discover the Impact of Your Contributions to Meaningful Causes
            </h3>
            <p className="mb-6 md:mb-8 md:text-md">
              Join us in making a difference! Our platform showcases the
              incredible work being done through your donations.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  75%
                </h3>
                <p>Causes Supported by Our Community</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  $1M
                </h3>
                <p>Total Funds Raised for Charitable Initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

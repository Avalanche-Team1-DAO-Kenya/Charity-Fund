"use client";

import React from "react";

export function Layout84() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Your Dashboard: Track Your Impact and Engagement in Real Time
          </h3>
          <div>
            <p className="mb-6 md:mb-8 md:text-md">
              Stay informed about your contributions with personalized
              statistics. Monitor your donations, votes, and followed causes
              effortlessly.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  100%
                </h3>
                <p>Total Donations Made</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  75%
                </h3>
                <p>Votes Cast on Proposals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

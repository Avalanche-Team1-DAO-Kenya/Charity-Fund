"use client";
import Charity1 from "../Assets/Charity1.jpg"
import React from "react";

export function Layout12() {
  return (
    <section id="relume" className=" md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Effortless Donation Tracking for Enhanced Transparency and
              Accountability
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Our Donation Tracking feature provides admins with real-time
              insights into contributions. Easily monitor and export donation
              data to ensure transparency and foster trust within the community.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Track Donations
                </h6>
                <p>
                  Gain insights into donation patterns and user contributions
                  effortlessly.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    className="size-12 rounded-lg"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Export Data
                </h6>
                <p>Easily export donation data for reporting and analysis.</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={Charity1}
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

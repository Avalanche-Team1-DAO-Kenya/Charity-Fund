"use client";

import React from "react";
import Charity2 from "../Assets/Charity2.jpg"
export function Layout3() {
  return (
    <section id="relume" className=" md:py-24 lg:py-28 space-x-4 space-y-4">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Empower Your Organization with Comprehensive User Management Tools
            </h1>
            <p className="md:text-md">
              Ready to help your organisations save costs and be able to track transactions
              with easing the burden of tracking trnsactions that require a lot of costs,Charity Fund 
              is here to save yor day .With enhanced tracking tools and up to speed data,it reduces space and time
              require with other applications enabling organisations to give back to society
            </p>
          </div>
          <div>
            <img
              src={Charity2}
              className="w-full object-cover rounded-lg"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

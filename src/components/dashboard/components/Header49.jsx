"use client";

import React from "react";

export function Header49() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="text-6xl font-bold md:text-9xl lg:text-10xl">
              Welcome Back, [User]!
            </h1>
          </div>
          <div>
            <p className="md:text-md">
              Here's a quick overview of your recent activities. Stay engaged
              and make a difference with your contributions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import donate from "../../../assets/DonateHome.jpg";

export function Header36() {
  return (
    <section
      id="relume"
      className=" grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Empowering Charitable Giving Through Blockchain Technology
        </h1>
        <p className="md:text-md">
          At CharityFund, we harness the power of blockchain to bring
          transparency and security to charitable donations. Our mission is to
          create a community-driven platform where every contribution is
          traceable and impactful.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Donate">Donate</Button>
          <Button title="Learn More" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
      <div>
        <img
          src={donate}
          alt="Relume placeholder image"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
}

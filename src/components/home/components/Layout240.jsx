"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import childrenSmilling from "../../../assets/Smilling Chlidren.jpeg";
import childrenStudying from "../../../assets/children studying.jpeg";
import building from "../../../assets/buidings.jpeg";



export function Layout240() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">
            Support Our Community: Transform Lives Through Your Generosity and
            Compassion
          </h2>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src={childrenSmilling}
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Join Us in Making a Difference: Every Contribution Counts!
            </h3>
            <p>
              Explore our highlighted causes and see how your donations can
              create real change.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Donate
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src={childrenStudying}
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Empower Change: Discover Causes That Need Your Support Today
            </h3>
            <p>
              Your contributions can help fund essential projects and uplift
              communities in need.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Support
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-center text-center">
            <div className="rb-6 mb-6 md:mb-8">
              <img
                src={building}
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
              Be the Change: See How Your Donations Make an Impact
            </h3>
            <p>
              Join a community of changemakers and witness the difference your
              support makes.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button iconRight={<RxChevronRight />} variant="link" size="link">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

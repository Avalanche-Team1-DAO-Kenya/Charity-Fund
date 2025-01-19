"use client";
import Charity4 from "../Assets/Charity4.jpg"
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4_1() {
  return (
    <section id="relume" className="md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Alerts</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Engage Users with Timely Notifications
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Keep your users informed and engaged through our notification
              system. Easily send alerts about important updates, events, and
              new proposals.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  User Engagement
                </h6>
                <p>
                  Enhance user interaction with targeted notifications and
                  updates.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Real-Time Alerts
                </h6>
                <p>
                  Instant notifications ensure users never miss important
                  information.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Send" variant="secondary">
                Send
              </Button>
              <Button
                title="View"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                View
              </Button>
            </div>
          </div>
          <div>
            <img
              src={Charity4}
              className="w-full object-cover rounded-lg"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

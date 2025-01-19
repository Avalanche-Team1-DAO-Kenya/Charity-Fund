"use client";
import Charity3 from "../Assets/Charity3.jpg"
import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout89() {
  return (
    <section id="relume" className="md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Insights</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Unlock the Power of Data-Driven Decisions
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              Ready to help your organisations make decisions faster with enhanced and improved data processing 
              ways to ensure quality service deivery and ensuring cost-effectiveness , Charity Funding is here to make your day.
              With  a proven strategy to reduce space consumption and improve data retreival speed,it is the best tool that can be 
              to help your businesses enabling organisations give back to society
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Button" variant="secondary">
                Button
              </Button>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
        </div>
        <img
          src={Charity3}
          className="w-full object-cover rounded-lg"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}

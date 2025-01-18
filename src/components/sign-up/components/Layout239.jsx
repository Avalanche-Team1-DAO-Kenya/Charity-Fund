"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { Link } from "react-router-dom";
import blockchainWallet from "../../../assets/blockchainWallet.jpeg";
import engagement from "../../../assets/engagement.jpeg";
import community from "../../../assets/communityImpact.jpeg";
import { RxChevronRight } from "react-icons/rx";

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Join</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Unlock Exclusive Benefits as a Registered User
              </h2>
              <p className="md:text-md">
                As a registered user, you gain access to secure donation
                options, ensuring your contributions are safe and traceable.
                Enjoy the power of voting rights, allowing you to influence
                which causes receive funding.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={blockchainWallet}
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Experience Enhanced Control Over Your Donations
              </h3>
              <p>
                Your personalized dashboard provides insights into your giving.
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={engagement}
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Engage with Causes That Matter to You
              </h3>
              <p>Stay updated and involved with your favorite initiatives.</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={community}
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                Participate in Community Decision-Making Efforts
              </h3>
              <p>Your voice matters—help shape the future of charity.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            <Link to="/about"><Button iconRight={<RxChevronRight />} variant="link" size="link">
              Learn More
            </Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

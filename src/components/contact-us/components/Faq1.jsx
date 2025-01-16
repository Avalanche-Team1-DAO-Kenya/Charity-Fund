"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to your most pressing questions about CharityFund and
            how it operates.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is CharityFund?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              CharityFund is a decentralized platform that transforms charitable
              donations. It utilizes blockchain technology for transparency and
              security. Users can actively participate in governance and fund
              allocation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I donate?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To donate, simply connect your wallet and select a cause. Follow
              the prompts to complete your donation securely. You can track your
              contributions through your user dashboard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is governance?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Governance allows users to vote on proposals for fund allocation.
              This ensures that the community has a say in which initiatives
              receive support. Your voice matters in shaping the platform's
              impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to track donations?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can track your donations through your user profile. The
              dashboard provides real-time updates on your contributions.
              Transparency is a core principle of CharityFund.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Who can propose causes?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Any registered user can propose a cause for funding. Proposals are
              subject to community voting. This democratic approach ensures that
              impactful initiatives are prioritized.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">We're here to help you!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

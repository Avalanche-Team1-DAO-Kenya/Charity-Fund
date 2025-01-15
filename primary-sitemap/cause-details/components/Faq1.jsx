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
            Find answers to common questions about our causes, donations, and
            how we measure impact.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is this cause?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              This cause aims to address critical issues in our community by
              providing essential resources. We focus on sustainable solutions
              that create lasting change. Your support helps us make a
              significant impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How can I donate?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Donating is simple and secure through our platform. Just select
              the cause you wish to support and follow the prompts to complete
              your donation. Every contribution, no matter the size, makes a
              difference.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              How is impact measured?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We measure impact through regular updates and reports on funded
              projects. Our transparent tracking system allows donors to see how
              their contributions are used. Feedback from beneficiaries also
              plays a crucial role in assessing effectiveness.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I suggest causes?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We encourage community involvement and welcome
              suggestions for new causes. You can submit your proposal through
              our platform for consideration by our governance team.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Who manages the funds?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Funds are managed by a dedicated team of charity organizers and
              community members. Our platform ensures transparency through
              blockchain technology, allowing users to track fund allocation.
              Decisions are made collaboratively through community voting.
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

"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";

export function Layout237() {
  const causes = [
    {
      title: "Support Flood Relief in Region B",
      progress: "70%",
      raised: "7,000 AVAX of 10,000 AVAX",
      daysLeft: 5,
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Build a School in Village A",
      progress: "45%",
      raised: "4,500 AVAX of 10,000 AVAX",
      daysLeft: 10,
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Reforestation in Region C",
      progress: "90%",
      raised: "9,000 AVAX of 10,000 AVAX",
      daysLeft: 2,
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Provide Clean Water to Village X",
      progress: "60%",
      raised: "6,000 AVAX of 10,000 AVAX",
      daysLeft: 7,
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Empower Women Entrepreneurs in Region Y",
      progress: "80%",
      raised: "8,000 AVAX of 10,000 AVAX",
      daysLeft: 4,
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Disaster Relief for Earthquake Victims in Region Z",
      progress: "50%",
      raised: "5,000 AVAX of 10,000 AVAX",
      daysLeft: 8,
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
  ];

  return (
    <section id="featured-causes" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <h2 className="text-5xl font-bold text-center md:text-7xl lg:text-8xl mb-12">
          Featured Causes
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {causes.map((cause, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <img
                src={cause.image}
                alt={cause.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-3">{cause.title}</h3>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-3">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: cause.progress }}
                ></div>
              </div>
              <p className="text-md mb-2">{cause.raised}</p>
              <p className="text-sm text-gray-500">Ends in {cause.daysLeft} days</p>
              <Button className="mt-4 w-full">Donate Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

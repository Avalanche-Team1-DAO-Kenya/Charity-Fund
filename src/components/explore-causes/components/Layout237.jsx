"use client";

import React from "react";
import { Button } from "@relume_io/relume-ui";
import { useNavigate } from "react-router-dom";

export function Layout237() {
  const navigate = useNavigate();

  const causes = [
    {
      title: "Support Flood Relief in Region B",
      progress: "70%",
      raised: "7,000 AVAX of 10,000 AVAX",
      daysLeft: 5,
      description:
        "Help families affected by devastating floods in Region B rebuild their lives with essential supplies and support.",
      link: "/cause-details/support-flood-relief-region-b",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Build a School in Village A",
      progress: "45%",
      raised: "4,500 AVAX of 10,000 AVAX",
      daysLeft: 10,
      description:
        "Join the mission to provide quality education by helping build a school in Village A.",
      link: "/cause-details/build-school-village-a",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Plant Trees in Urban Areas",
      progress: "60%",
      raised: "6,000 AVAX of 10,000 AVAX",
      daysLeft: 7,
      description:
        "Contribute to reducing carbon footprints by funding urban tree-planting initiatives.",
      link: "/cause-details/plant-trees-urban-areas",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Healthcare for Remote Communities",
      progress: "30%",
      raised: "3,000 AVAX of 10,000 AVAX",
      daysLeft: 12,
      description:
        "Support the provision of medical supplies and healthcare services in underserved communities.",
      link: "/cause-details/healthcare-remote-communities",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Emergency Aid for Earthquake Victims",
      progress: "80%",
      raised: "8,000 AVAX of 10,000 AVAX",
      daysLeft: 3,
      description:
        "Provide essential relief materials to families affected by recent earthquakes.",
      link: "/cause-details/emergency-aid-earthquake-victims",
      image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    },
    {
      title: "Youth Empowerment Programs",
      progress: "50%",
      raised: "5,000 AVAX of 10,000 AVAX",
      daysLeft: 15,
      description:
        "Enable skill development and educational opportunities for underprivileged youth.",
      link: "/cause-details/youth-empowerment-programs",
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
              <p className="text-sm text-gray-700 mb-3">{cause.description}</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-3">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: cause.progress }}
                ></div>
              </div>
              <p className="text-md mb-2">{cause.raised}</p>
              <p className="text-sm text-gray-500">Ends in {cause.daysLeft} days</p>
              <div className="flex gap-4 mt-4">
                <Button className="w-full" onClick={() => navigate(cause.link)}>
                  Read More
                </Button>
                <Button className="w-full" variant="secondary">
                  Donate Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="filter-sort" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-center md:text-7xl lg:text-8xl">
            Filter & Sort Causes
          </h2>
          <p className="text-center text-md mt-4">
            Narrow down your search to find the most impactful causes.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-bold mb-3">Categories</h3>
            <ul className="space-y-2">
              {[
                "Education",
                "Disaster Relief",
                "Healthcare",
                "Community Development",
                "Environment",
              ].map((category) => (
                <li key={category}>
                  <input type="checkbox" id={category} />{" "}
                  <label htmlFor={category}>{category}</label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Funding Status</h3>
            <ul className="space-y-2">
              {["Fully Funded", "Partially Funded", "Needs Urgent Attention"].map(
                (status) => (
                  <li key={status}>
                    <input type="checkbox" id={status} />{" "}
                    <label htmlFor={status}>{status}</label>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Location</h3>
            <select className="w-full p-3 border border-gray-300 rounded-md">
              <option>Select a region</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia</option>
              <option>Africa</option>
            </select>
          </div>
        </div>
        <div className="mt-10 text-center">
          <h3 className="font-bold mb-3">Sort By</h3>
          <select className="w-full md:w-auto p-3 border border-gray-300 rounded-md">
            <option>Popularity</option>
            <option>Newest First</option>
            <option>Most Funded</option>
            <option>Least Funded</option>
          </select>
        </div>
      </div>
    </section>
  );
}

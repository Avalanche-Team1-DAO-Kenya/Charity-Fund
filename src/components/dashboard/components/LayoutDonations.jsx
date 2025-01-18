import React from "react";

export function LayoutDonations() {
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Your Recent Donations</h2>
      <p>Donated [Dynamic Value] AVAX to [Cause Name] on [Date]</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">View All Donations</button>
    </section>
  );
}
import React from "react";

export function LayoutCauses() {
  return (
    <section className="p-6 bg-gray-50 rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6">Causes You’re Supporting</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded">
          <h3 className="text-xl font-semibold">Build a School in Village A</h3>
          <p>Progress: 5,000 AVAX of 10,000 AVAX</p>
          <p>Your Contribution: [Dynamic Value]</p>
          <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded">Donate More</button>
        </div>
        <div className="p-4 border rounded">
          <h3 className="text-xl font-semibold">Flood Relief Fund</h3>
          <p>Progress: 8,000 AVAX of 10,000 AVAX</p>
          <p>Your Contribution: [Dynamic Value]</p>
          <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded">Donate More</button>
        </div>
      </div>
    </section>
  );
}
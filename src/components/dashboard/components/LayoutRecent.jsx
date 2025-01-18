import React from "react";

export function LayoutRecent() {
  return (
    <section className="p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6">Recent Donations</h2>
      <div className="space-y-4">
        <p>Donated [Dynamic Value] to [Cause Name] on [Date]</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">View All Donations</button>
      </div>
    </section>
  );
}

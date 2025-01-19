import React from "react";

export function LayoutNotifications() {
  return (
    <section className="p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-6">Notifications</h2>
      <ul className="space-y-4">
        <li>New proposal: Allocate 2,000 AVAX for flood relief.</li>
        <li>Congratulations! 'Build a School' cause met its funding goal.</li>
      </ul>
    </section>
  );
}
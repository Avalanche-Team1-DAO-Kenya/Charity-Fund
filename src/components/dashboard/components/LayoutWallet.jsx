import React from "react";

export function LayoutWallet() {
  return (
    <section className="p-12 bg-white rounded shadow-md">
      <h2 className="text-4xl font-bold mb-10">Wallet</h2>
      <ul className="space-y-8">
        <li><strong>Balance:</strong> [Dynamic Value]</li>
        <li>
          <strong>Connected Wallets:</strong>
          <ul className="pl-6 mt-4 list-disc">
            <li>Wallet 1: [Dynamic Address]</li>
            <li>Wallet 2: [Dynamic Address]</li>
          </ul>
        </li>
        <li>
          <button className="mt-4 bg-red-500 text-white py-3 px-6 rounded hover:bg-red-600">Disconnect Wallet</button>
        </li>
        <li>
          <button className="mt-4 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">Add Wallet</button>
        </li>
      </ul>
    </section>
  );
}

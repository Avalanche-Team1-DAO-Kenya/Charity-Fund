"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useState } from "react";

export function Layout237({ selectedCause }) {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [personalMessage, setPersonalMessage] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <section id="donation-content" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        {/* Cause Name */}
        <div className="mb-10 text-center">
          <h2 className="mb-5 text-5xl font-bold md:text-7xl lg:text-8xl">
            Support {selectedCause || "a Cause"}
          </h2>
        </div>

        {/* Donation Form Section */}
        <div className="mb-10">
          <h3 className="mb-4 text-3xl font-semibold">Enter Your Donation Details</h3>
          <form className="space-y-6">
            {/* Amount Section */}
            <div>
              <label className="block mb-2 font-medium">Amount</label>
              <input
                type="text"
                placeholder="Enter amount (e.g., 10 AVAX)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border rounded-md"
              />
              <div className="mt-4 flex gap-4">
                {["5 AVAX", "10 AVAX", "20 AVAX"].map((preset) => (
                  <Button
                    key={preset}
                    variant="secondary"
                    onClick={() => setAmount(preset.replace(" AVAX", ""))}
                  >
                    {preset}
                  </Button>
                ))}
              </div>
            </div>

            {/* Payment Method Section */}
            <div>
              <label className="block mb-2 font-medium">Payment Method</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="wallet"
                    onChange={() => setPaymentMethod("wallet")}
                  />
                  Pay with Connected Wallet (e.g., MetaMask, Core Wallet)
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="walletconnect"
                    onChange={() => setPaymentMethod("walletconnect")}
                  />
                  Pay with WalletConnect
                </label>
              </div>
            </div>

            {/* Personal Message */}
            <div>
              <label className="block mb-2 font-medium">Personal Message (Optional)</label>
              <textarea
                placeholder="Add a message for the cause organizer"
                value={personalMessage}
                onChange={(e) => setPersonalMessage(e.target.value)}
                className="w-full p-3 border rounded-md"
              />
            </div>

            {/* Anonymity */}
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={() => setIsAnonymous(!isAnonymous)}
                />
                Donate anonymously
              </label>
            </div>
          </form>
        </div>

        {/* Donation Summary Section */}
        <div className="mb-10">
          <h3 className="mb-4 text-3xl font-semibold">Donation Summary</h3>
          <p>Cause Name: {selectedCause || "Not Selected"}</p>
          <p>Amount to Donate: {amount || "0"} AVAX</p>
          <p>Blockchain Fees: Estimated fees: ~0.01 AVAX</p>
          <p>Total: {(parseFloat(amount || "0") + 0.01).toFixed(2)} AVAX</p>
        </div>

        {/* Security Reminder */}
        <div className="mb-10">
          <h3 className="mb-4 text-3xl font-semibold">Your Security is Our Priority</h3>
          <p>
            All transactions are secured and recorded on the Avalanche blockchain for full transparency.
            Always verify the wallet address before proceeding.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex gap-4">
          <Button variant="primary" onClick={() => console.log("Donation confirmed")}>
            Donate Now
          </Button>
          <Button variant="secondary" onClick={() => console.log("Donation canceled")}>
            Cancel
          </Button>
        </div>
      </div>
    </section>
  );
}

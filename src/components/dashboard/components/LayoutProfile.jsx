import React from "react";

export function LayoutProfile() {
  return (
    <section className="p-12 bg-white rounded shadow-md">
      <h2 className="text-4xl font-bold mb-10">User Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Profile Details</h3>
          <ul className="space-y-6">
            <li><strong>Name:</strong> [Dynamic Name]</li>
            <li><strong>Username:</strong> [Dynamic UserName]</li>
            <li><strong>Email:</strong> [Dynamic Email]</li>
            <li><strong>Total Donated:</strong> [Dynamic Value]</li>
            <li><strong>Causes Supported:</strong> [Dynamic Count]</li>
            <li><strong>Wallet Balance:</strong> [Dynamic Value]</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Profile Picture</h3>
          <img src="https://via.placeholder.com/150" alt="Profile" className="w-40 h-40 rounded-full mb-6" />
          <button className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">Upload New Picture</button>
        </div>
      </div>
    </section>
  );
}
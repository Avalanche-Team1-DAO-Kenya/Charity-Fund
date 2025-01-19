import React from "react";

export function LayoutSettings() {
  return (
    <section className="p-8 bg-white rounded shadow-md">
      <h2 className="text-4xl font-bold mb-6">Settings</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Update Profile Information</h3>
          <p>Edit your name, email, and other personal details.</p>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input type="text" className="w-full border rounded p-2" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" className="w-full border rounded p-2" placeholder="Enter your email" />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Changes</button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Change Password</h3>
          <p>Ensure your account remains secure by updating your password.</p>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Current Password</label>
              <input type="password" className="w-full border rounded p-2" placeholder="Enter current password" />
            </div>
            <div>
              <label className="block font-semibold mb-1">New Password</label>
              <input type="password" className="w-full border rounded p-2" placeholder="Enter new password" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Confirm New Password</label>
              <input type="password" className="w-full border rounded p-2" placeholder="Confirm new password" />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update Password</button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Manage Notifications</h3>
          <p>Set preferences for how you receive notifications.</p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Email Notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> SMS Notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Push Notifications
            </label>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Preferences</button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Privacy Settings</h3>
          <p>Control the visibility of your data and activity.</p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="privacy" className="mr-2" /> Public
            </label>
            <label className="flex items-center">
              <input type="radio" name="privacy" className="mr-2" /> Private
            </label>
            <label className="flex items-center">
              <input type="radio" name="privacy" className="mr-2" /> Friends Only
            </label>
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Save Settings</button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Account Security</h3>
          <p>Review and enhance the security of your account.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Enable Two-Factor Authentication</button>
        </div>
      </div>
    </section>
  );
}

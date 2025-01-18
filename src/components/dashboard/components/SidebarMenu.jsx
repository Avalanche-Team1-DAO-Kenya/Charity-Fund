import React from "react";

export function SidebarMenu({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Profile" },
    { name: "Wallet" },
    { name: "Recent" },
    { name: "Causes" },
    { name: "Notifications" },
    { name: "Settings" },
  ];

  return (
    <div
      className={`w-64 bg-gray-800 text-white p-6 h-auto min-h-screen`}
    >
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <button
              className={`w-full text-left py-2 px-4 rounded-lg ${
                activePage === item.name
                  ? "bg-gray-700 font-semibold"
                  : "hover:bg-gray-600"
              }`}
              onClick={() => setActivePage(item.name)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

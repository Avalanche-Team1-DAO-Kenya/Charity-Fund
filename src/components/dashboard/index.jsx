import React, { useState } from "react";
import { Header49 } from "./components/Header49";
import { SidebarMenu } from "./components/SidebarMenu";
import { LayoutProfile } from "./components/LayoutProfile";
import { LayoutWallet } from "./components/LayoutWallet";
import { LayoutRecent } from "./components/LayoutRecent";
import { LayoutCauses } from "./components/LayoutCauses";
import { LayoutNotifications } from "./components/LayoutNotifications";
import { LayoutSettings } from "./components/LayoutSettings";
//import { Footer } from "./components/Footer";

export default function MainDashboard() {
  const [activePage, setActivePage] = useState("Profile");

  const renderContent = () => {
    switch (activePage) {
      case "Profile":
        return <LayoutProfile />;
      case "Wallet":
        return <LayoutWallet />;
      case "Recent":
        return <LayoutRecent />;
      case "Causes":
        return <LayoutCauses />;
      case "Notifications":
        return <LayoutNotifications />;
      case "Settings":
        return <LayoutSettings />;
      default:
        return <LayoutProfile />;
    }
  };

  return (
    <div className="flex">
      {/* Left Sidebar Menu */}
      <SidebarMenu activePage={activePage} setActivePage={setActivePage} />

      {/* Main Dashboard Content */}
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header49 />
        <div className="p-8 max-w-7xl mx-auto">{renderContent()}</div>
        
      </div>
    </div>
  );
}
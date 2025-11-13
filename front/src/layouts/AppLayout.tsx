import React from "react";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="app-layout">
      {/* App header and sidebar can be added here */}
      <header>{/* HeaderApp component */}</header>
      <aside>{/* SidebarApp component */}</aside>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;

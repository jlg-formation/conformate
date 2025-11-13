import React from "react";

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="public-layout">
      {/* Public header or navigation can be added here */}
      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "success" | "warning" | "error";
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "success" }) => {
  return <span className={`badge ${variant}`}>{children}</span>;
};

export default Badge;

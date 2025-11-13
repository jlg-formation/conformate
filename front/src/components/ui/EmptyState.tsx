import React from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="empty-state">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default EmptyState;

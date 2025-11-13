import React from "react";

interface TagProps {
  children: React.ReactNode;
  color?: string;
}

const Tag: React.FC<TagProps> = ({ children, color }) => {
  return (
    <span className="tag" style={{ backgroundColor: color }}>
      {children}
    </span>
  );
};

export default Tag;

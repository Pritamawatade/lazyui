"use client"

import React, { ReactNode, HTMLAttributes } from "react";

type Status = "online" | "busy" | "away" | "offline";
type Position = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface StatusAvatarProps extends HTMLAttributes<HTMLDivElement> {
  status?: Status;
  position?: Position;
  children: ReactNode;
  className?: string;
}

const StatusAvatar: React.FC<StatusAvatarProps> = ({
  status = "online",
  position = "bottom-right",
  children,
  className = "",
  ...props
}) => {
  const statusColors: Record<Status, string> = {
    online: "bg-green-500",
    busy: "bg-red-500",
    away: "bg-amber-500",
    offline: "bg-gray-400",
  };

  const positions: Record<Position, string> = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };

  return (
    <div className={`relative inline-block ${className}`} {...props}>
      {children}
      <span
        className={`absolute w-4 h-4 rounded-full border-2 border-white ${statusColors[status]} ${positions[position]}`}
      />
    </div>
  );
};

export default StatusAvatar;

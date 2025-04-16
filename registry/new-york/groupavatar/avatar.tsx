import React, { FC } from "react";
type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
type AvatarVariant = "default" | "gradient" | "bordered" | "soft";
type AvatarRounded = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: AvatarSize;
  variant?: AvatarVariant;
  imageUrl?: string;
  initials?: string;
  className?: string;
  rounded?: AvatarRounded;
}

const Avatar: FC<AvatarProps> = ({
  size = "md",
  variant = "default",
  imageUrl,
  initials,
  className = "",
  rounded = "full",
  ...props
}) => {
  const sizes: Record<AvatarSize, string> = {
    xs: "w-8 h-8 text-xs",
    sm: "w-10 h-10 text-sm",
    md: "w-12 h-12",
    lg: "w-16 h-16 text-lg",
    xl: "w-20 h-20 text-xl",
  };

  const variants: Record<AvatarVariant, string> = {
    default: "bg-gray-100 text-gray-600",
    gradient: "bg-gradient-to-br from-pink-500 to-purple-600 text-white",
    bordered: "bg-white text-gray-600 ring-4 ring-gray-100",
    soft: "bg-blue-100 text-blue-600",
  };

  return (
    <div
      className={`flex items-center justify-center font-medium ${
        sizes[size]
      } ${variants[variant]} rounded-${rounded} ${className}`}
      {...props}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Avatar"
          className={`w-full h-full object-cover rounded-${rounded}`}
        />
      ) : (
        initials
      )}
    </div>
  );
};

export default Avatar;

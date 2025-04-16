import Avatar from "./avatar";

interface User {
  imageUrl?: string;
  initials?: string;
}

interface GroupAvatarProps {
  users?: User[];
  maxCount?: number;
  size?: "sm" | "md" | "lg";
}

const GroupAvatar: React.FC<GroupAvatarProps> = ({
  users = [],
  maxCount = 4,
  size = "md",
}) => {
  const visibleUsers = users.slice(0, maxCount);
  const remaining = users.length - maxCount;

  return (
    <div className="flex -space-x-4">
      {visibleUsers.map((user, index) => (
        <Avatar
          key={index}
          size={size}
          imageUrl={user.imageUrl}
          initials={user.initials}
          className="ring-2 ring-white"
        />
      ))}
      {remaining > 0 && (
        <Avatar
          size={size}
          variant="default"
          initials={`+${remaining}`}
          className="ring-2 ring-white"
        />
      )}
    </div>
  );
};

export default GroupAvatar;

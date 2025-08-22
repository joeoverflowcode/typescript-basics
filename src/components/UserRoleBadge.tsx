import type { UserRole } from "../types/user.types";
import { roleConfig } from "../config/role.config";

interface RoleBadgeProps {
  role: UserRole;
}

const UserRoleBadge = ({ role }: RoleBadgeProps) => {
  const config = roleConfig[role];
  const Icon = config.icon;
  return (
    <div className="flex items-center gap-1 p-3">
    {config.label}{" "}
      <span>
        <Icon className="w-4 h-4" />
      </span>
    </div>
  );
};

export default UserRoleBadge;

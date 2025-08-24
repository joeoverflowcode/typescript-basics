import type { UserRole } from "../types/user.types";
import { roleConfig } from "../config/role.config";
import { Badge } from "./ui/badge";

interface RoleBadgeProps {
  role: UserRole;
}

const UserRoleBadge = ({ role }: RoleBadgeProps) => {
  const config = roleConfig[role];
  const Icon = config.icon;
  return (
    <Badge>
    {config.label}
        <Icon />
    </Badge>
  );
};

export default UserRoleBadge;

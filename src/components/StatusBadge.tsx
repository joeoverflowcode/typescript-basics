import { statusConfig } from "../config/status.config";
import type { UserStatus } from "../types/user.types";
import { Badge } from "./ui/badge";

interface StatusBadgeProps {
  status: UserStatus;
  className?: string;
}

export const StatusBadge = ({ status, className = '' }: StatusBadgeProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;
  
  return (
    <Badge
      className={`${config.class} ${className}`}
    >
      <Icon />
      {config.label}
    </Badge>
  );
};

export default StatusBadge;

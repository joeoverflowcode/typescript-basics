import { statusConfig } from "../config/status.config";
import type { UserStatus } from "../types/user.types";

interface StatusBadgeProps {
  status: UserStatus;
  className?: string;
}

export const StatusBadge = ({ status, className = " " }: StatusBadgeProps) => {
  const config = statusConfig[status];
  const Icon = config.icon;
  return (
    <span
      className={`inline-flex items-center gap-x-1 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-inset mt-3 ${config.class} ${className}`}
    >
      <Icon className="h-4 w-4" />
      {config.label}
    </span>
  );
};

export default StatusBadge;

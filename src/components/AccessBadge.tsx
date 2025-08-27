import type { UserAccess } from "@/types/user.types";
import { Badge } from "./ui/badge";
import { accessConfig } from "@/config/access.config";

type AccessBadgeProps = {
  access: UserAccess;
  className?: string;
  iconSize?: number;
};

const AccessBadge = ({ access }: AccessBadgeProps) => {
    const config = accessConfig[access]
    const Icon = config.icon

  return <Badge className="text-md" variant="outline">
  {config.label}
  <div>
  <Icon size={22} />
  </div>
  </Badge>;
};

export default AccessBadge;

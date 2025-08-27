import type { UserAccess } from "@/types/user.types";
import { Badge } from "./ui/badge";
import { accessConfig } from "@/config/access.config";

type AccessBadgeProps = {
  access: UserAccess;
  className?: string;
};

const AccessBadge = ({ access }: AccessBadgeProps) => {
    const config = accessConfig[access]
    const Icon = config.icon

  return <Badge className="text-sm">
  {config.label}
  <Icon/>
  </Badge>;
};

export default AccessBadge;

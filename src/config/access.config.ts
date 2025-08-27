import type { UserAccess } from "@/types/user.types";
import { Star, Users, UserStar, type LucideProps } from "lucide-react";

export type AccessConfigProps = {
  class: string;
  label: string;
  icon: React.ComponentType<LucideProps>;
};

export const accessConfig: Record<UserAccess, AccessConfigProps> = {
  staff: {
    class: "bg-blue-50 text-blue-700 ring-blue-600/20",
    label: "Staff",
    icon: Users,
  },
  supervisor: {
    class: "bg-blue-50 text-blue-700 ring-blue-600/20",
    label: "Supervisor",
    icon: UserStar,
  },
  manager: {
    class: "bg-blue-50 text-blue-700 ring-blue-600/20",
    label: "Manager",
    icon: Star,
  },
};

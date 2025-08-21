import type { UserStatus } from "../types/user.types";
import type { LucideProps } from "lucide-react";
import { CheckCircle, XCircle, Clock } from "lucide-react";


export type StatusConfig = {
    class: string;
    label: string;
    icon: React.ComponentType<LucideProps>
} 

export const statusConfig: Record<UserStatus, StatusConfig> = {
  active: {
    class: "bg-green-50 text-green-700 ring-green-600/20",
    label: "Active",
    icon: CheckCircle,
  },
  inactive: {
    class: "bg-red-50 text-red-700 ring-red-600/20",
    label: "Inactive",
    icon: XCircle,
  },
  pending: {
    class: "bg-amber-50 text-amber-700 ring-amber-600/20",
    label: "Pending",
    icon: Clock,
  },
};

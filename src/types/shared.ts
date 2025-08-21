import { CheckCircle, XCircle, Clock } from "lucide-react";
import type {LucideProps} from 'lucide-react'

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string;
  background_color: string;
  bio: string;
  status: UserStatus;
}

export type UserStatus = "active" | "inactive" | "pending";

export const statusConfig: Record<
  UserStatus,
  {
    class: string;
    label: string;
    icon: React.ComponentType<LucideProps>
  }
> = {
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

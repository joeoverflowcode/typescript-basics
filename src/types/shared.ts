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
  { color: string; label: string }
> = {
  active: {
    color: "green",
    label: "Active",
  },
  inactive: {
    color: "red",
    label: "Inactive",
  },
  pending: {
    color: "orange",
    label: "Pending",
  },
};

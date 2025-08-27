export interface BaseUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string;
  background_color: string;
  gym_location: string;
  join_date: string;
  gender: UserGender;
  status: UserStatus;
  role: UserRole;
}

export type UserStatus = "active" | "inactive" | "pending";

export type UserGender = "male" | "female";

export type UserRole = "member" | "admin" | "coach";

export type UserAccess = "staff" | "supervisor" | "manager";

export interface MemberUser extends BaseUser {
  role: "member";
  user_name: string;
  membership_tier: "basic" | "premium";
  fitness_goals?: string;
  diet?: string;
}

export interface CoachUser extends BaseUser {
  role: "coach";
  specialties: string[];
  bio: string;
}

export interface AdminUser extends BaseUser {
  role: "admin";
  staff_id: string;
  permissions: string[];
  access_level: UserAccess;
}

export type User = MemberUser | CoachUser | AdminUser;

export function isMember(user: User): user is MemberUser {
  return user.role === "member";
}

export function isCoach(user: User): user is CoachUser {
  return user.role === "coach";
}

export function isAdmin(user: User): user is AdminUser {
  return user.role === "admin";
}

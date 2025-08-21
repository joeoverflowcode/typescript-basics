export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar_url: string;
  background_color: string;
  bio: string;
  status: UserStatus;
  gender: UserGender
  user_name:string
}

export type UserStatus = "active" | "inactive" | "pending";

export type UserGender = "male" | "female";

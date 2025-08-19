export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar_url: string;
  email: string;
};

export const users: User[] = [
  {
    id: 1,
    first_name: "Jim",
    last_name: "Grace",
    avatar_url: "./public/vite.svg",
    email: "test@email.com",
  },
    {
    id: 2,
    first_name: "Jackie",
    last_name: "Mayers",
    avatar_url: "./public/vite.svg",
    email: "test1@email.com",
  },
    {
    id: 3,
    first_name: "Wendy",
    last_name: "Lee",
    avatar_url: "./public/vite.svg",
    email: "email1@email.com",
  },
      {
    id: 4,
    first_name: "Bruce",
    last_name: "Hill",
    avatar_url: "./public/vite.svg",
    email: "email2@email.com",
  },
];

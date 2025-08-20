export interface User {
    id: number;
    first_name: string;
    last_name: string;
    avatar_url: string;
    email: string;
}

export const users:User[] = [
  { id: 1, first_name: "Alice", last_name:'Brown', avatar_url:'../public/1.png', email: "alice@example.com" },
  { id: 2, first_name: "Steve", last_name:'Cross', avatar_url:'../public/2.png', email: "test@sample.com" },
  { id: 3, first_name: "Margot", last_name:'Reese', avatar_url:'../public/3.png', email: "margo@email.com" },
  { id: 4, first_name: "Jeffrey", last_name:'Allen', avatar_url:'../public/4.png', email: "test@example.com" }
]
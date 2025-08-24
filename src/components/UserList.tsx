import type { User } from "../types/user.types";
import GenderBadge from "./GenderBadge";
import UserRoleBadge from "./UserRoleBadge";
import { Card, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type UserListProps = {
  data: User[];
};

const getInitials = (firstName: string, lastName: string) => {
  const firstInitial = firstName?.charAt(0) || "";
  const lastInitial = lastName?.charAt(0) || "";
  return (firstInitial + lastInitial).toUpperCase();
};

const UserList = ({ data }: UserListProps) => {
  return (
    <div className="container">
      <h3 className="text-3xl text-center">UserList</h3>
      <div className="user-list">
        {data.map((user) => (
          <Card key={user.id} className="user-card shadow-md">
            <Avatar className="ring-2 ring-foreground w-[3rem] h-[3rem]">
              <AvatarImage
                src={user.avatar_url}
                alt={user.first_name}
                style={{ backgroundColor: user.background_color }}
              />
              <AvatarFallback>{getInitials(user.first_name, user.last_name)}</AvatarFallback>
            </Avatar>
            <CardTitle>
              {user.first_name} <span>{user.last_name}</span>
            </CardTitle>
            <UserRoleBadge role={user.role} />
            <GenderBadge gender={user.gender} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserList;

import type { User } from "../types/user.types";
import GenderBadge from "./GenderBadge";
import UserRoleBadge from "./UserRoleBadge";

type UserListProps = {
  data: User[];
};

const UserList = ({ data }: UserListProps) => {
  return (
    <div className="container">
      <h3 className="text-3xl">UserList</h3>
      <div className="user-list">
        {data.map((user) => (
          <div key={user.id} className="user-card">
            <img
              src={user.avatar_url}
              alt={user.first_name}
              className="avatar"
              style={{ backgroundColor: user.background_color }}
            />
            <p className="">
              {user.first_name} <span>{user.last_name}</span>
            </p>
            <UserRoleBadge role={user.role}/>
            <GenderBadge gender={user.gender} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

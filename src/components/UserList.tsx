import type { User } from "../types/shared";
import StatusBadge from "./StatusBadge";

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
            <p className="pb-2">{user.first_name} <span>{user.last_name}</span></p>
            <p className="text-xs">{user.email}</p>
            <StatusBadge status={user.status}/>
            <p className="pt-4">{user.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

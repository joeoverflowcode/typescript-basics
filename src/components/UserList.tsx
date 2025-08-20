
import type { User } from "../types/types";

type UserListProps = {
  data: User[];
};
const UserList = ({ data }: UserListProps) => {
  return (
    <div>
      <h3>UserList</h3>
      <div className="user-list">
        {data.map((user) => (
          <div key={user.id} className="user-card">
            <img src={user.avatar_url} alt={user.first_name} className="avatar" style={{backgroundColor:user.background_color}}/>
            <p>{user.first_name} <span>{user.last_name}</span></p>
            <p>{user.bio}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

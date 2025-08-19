import type { User } from "../data/users";

type UserListProps = {
  data: User[];
};

const UserList = ({ data }: UserListProps) => {
  return (
    <div>
      <h3>UserList</h3>
      <div className="user-list">
        {data.map((user) => (
          <div className="user-card">
            {user.avatar_url ? <img src={user.avatar_url} alt={user.first_name} className="avatar"/> : null}
            <p>{user.first_name} <span>{user.last_name}</span></p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;

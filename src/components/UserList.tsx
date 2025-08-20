import type { User } from "../types/shared";
// import { UserStatus } from "../types/shared";
import { statusConfig } from "../types/shared";

type UserListProps = {
  data: Array<User>;
};

const UserList = ({ data }: UserListProps) => {
  return (
    <div>
      <h3>UserList</h3>
      <div className="user-list">
        {data.map((user) => {
          const config = statusConfig[user.status];
          return (
            <div key={user.id} className="user-card">
              <img
                src={user.avatar_url}
                style={{ backgroundColor: user.background_color }}
                className="avatar"
              />
              <div>
                {user.first_name} <span>{user.last_name}</span>
              </div>
              <div>{user.email}</div>
              <div
                style={{ alignItems: "center", gap: "0.5rem" }}
              >
                status: {" "}
                <span
                  style={{
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: config.color,
                  }}
                > {" "}</span>

              </div>
              <p>{user.bio}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;

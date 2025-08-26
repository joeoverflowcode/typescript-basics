import type { User } from "@/types/user.types";
import MemberCard from "./MemberCard";
type MemberListProps = {
  data: User[];
};

const MemberList = ({ data }: MemberListProps) => {
  const members = data.filter((user) => user.role === "member");
  return (
    <div className="container">
      <h3 className="h3">Member List</h3>
      <div className="user-list">
        {members.map((member) => (

          <MemberCard member={member}/>
        ))}
      </div>
    </div>
  );
};

export default MemberList;

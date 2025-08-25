import type { User } from "@/types/user.types";
import { Card, CardTitle, CardContent, CardDescription } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { getInitials } from "@/lib/member.utils";
import StatusBadge from "./StatusBadge";
import GenderBadge from "./GenderBadge";

type MemberListProps = {
  data: User[];
};

const MemberList = ({ data }: MemberListProps) => {
  const members = data.filter((user) => user.role === "member");
  return (
    <div>
      <h3 className="h3">Member List</h3>
      <div className="user-list">
        {members.map((member) => (
          <Card key={member.id} className="member-card">
            <Avatar className="ring-avatar w-[4rem] h-[4rem]">
              <AvatarImage
                src={member.avatar_url}
                style={{ backgroundColor: member.background_color }}
              />
              <AvatarFallback>
                {getInitials(member.first_name, member.last_name)}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-center">
              {member.first_name}{" "}
               {member.last_name}<br/>
              <span className="text-xs">{member.user_name}</span>
            </CardTitle>
            <CardDescription>Joined: {member.join_date}</CardDescription>
            <div id="badges" className="flex gap-2">
              <GenderBadge gender={member.gender} />
              <StatusBadge status={member.status} />
            </div>
            <CardContent>{member.fitness_goals}</CardContent>
            <CardDescription>{member.fitness_goals}</CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MemberList;

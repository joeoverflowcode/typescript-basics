import { Card, CardTitle, CardContent, CardDescription } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { getInitials } from "@/lib/member.utils";
import StatusBadge from "./StatusBadge";
import GenderBadge from "./GenderBadge";
import type { MemberUser } from "@/types/user.types";

type MemberCardProps = {
  member: MemberUser;
};

const MemberCard = ({ member }: MemberCardProps) => {

  return (
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
              {member.first_name} {member.last_name}
              <br />
              <span className="text-xs">{member.user_name}</span>
            </CardTitle>
            <div id="badges" className="flex gap-2">
              <GenderBadge gender={member.gender} />
              <StatusBadge status={member.status} />
            </div>
            <CardContent className="text-center">
              {" "}
              Joined: {member.join_date}
              <br />
              Membership Plan: {member.membership_tier}
            </CardContent>

            <CardDescription>
              Fitness Goals: {member.fitness_goals}
              <br />
              <br />
              Diet Info: {member.diet}
            </CardDescription>
          </Card>
        
  );
};

export default MemberCard;

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardDescription, CardTitle } from "./ui/card";
import type { CoachUser } from "@/types/user.types";
import { getInitials } from "@/lib/member.utils";
import { Badge } from "./ui/badge";

type CoachCardProps = {
  coach: CoachUser;
};
const CoachCard = ({ coach }: CoachCardProps) => {
  return (
    <Card key={coach.id} className="member-card">
      <Avatar className="ring-avatar w-[4rem] h-[4rem]">
        <AvatarImage
          src={coach.avatar_url}
          style={{ backgroundColor: coach.background_color }}
          alt={coach.first_name}
        />
        <AvatarFallback>
          {getInitials(coach.first_name, coach.last_name)}
        </AvatarFallback>
      </Avatar>
      <CardTitle>
        {coach.first_name} {coach.last_name}
      </CardTitle>
      <CardDescription>
        Bio: {coach.bio}
        <br />
        <br />
        Classes: {coach.specialties.map((specialty, index) => (
          <Badge key={index} variant='destructive' className="m-0.5">
            {specialty}
          </Badge>
        ))}
      </CardDescription>
    </Card>
  );
};

export default CoachCard;

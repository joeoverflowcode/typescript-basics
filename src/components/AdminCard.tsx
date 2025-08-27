import type { AdminUser } from "@/types/user.types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getInitials } from "@/lib/member.utils";
import { Badge } from "./ui/badge";
import StatusBadge from "./StatusBadge";
import AccessBadge from "./AccessBadge";

type AdminCardProps = {
  admin: AdminUser;
};

const AdminCard = ({ admin }: AdminCardProps) => {
  return (
    <Card className="user-card" key={admin.id}>
      <Avatar className="ring-avatar w-[4rem] h-[4rem]">
        <AvatarImage
          src={admin.avatar_url}
          style={{ backgroundColor: admin.background_color }}
        />
        <AvatarFallback>
          {getInitials(admin.first_name, admin.last_name)}
        </AvatarFallback>
      </Avatar>
      <CardTitle>
        {admin.first_name} {admin.last_name}<br/>
        <span className="text-sm font-light">{admin.staff_id}</span><br/>
        <span className="text-sm font-light">{admin.gym_location}</span>
      </CardTitle>
      <AccessBadge access={admin.access_level} />
      <StatusBadge status={admin.status} />
      <CardDescription>Employee Since: {admin.join_date}</CardDescription>
      <CardFooter>
        <div className="flex">
          {admin.permissions.map((permission, index) => (
            <Badge className="m-0.5" variant="secondary" key={index}>
              {permission.replace(/_/g, " ")}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AdminCard;

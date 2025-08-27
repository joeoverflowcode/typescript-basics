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
        {admin.first_name} {admin.last_name}
      </CardTitle>
      <CardDescription>Staff Number: {admin.staff_id}</CardDescription>
      <CardContent>Location: {admin.gym_location}</CardContent>
      <StatusBadge status={admin.status} />
      <AccessBadge access={admin.access_level} />
      <CardDescription>Staff Since: {admin.join_date}</CardDescription>
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

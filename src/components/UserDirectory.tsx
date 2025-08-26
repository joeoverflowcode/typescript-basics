import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import StatusBadge from "./StatusBadge";
import UserRoleBadge from "./UserRoleBadge";
import type { User } from "@/types/user.types";

type UserDirectoryProps = {
  data: User[];
};

const UserDirectory = ({ data }: UserDirectoryProps) => {
  return (
    <div className="container">
      <h3 className="h3">Gym Directory</h3>
      <Table>
        <TableCaption>List of all Users in Database</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User Type</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id}>
              <TableCell><UserRoleBadge role={user.role}/></TableCell>
              <TableCell>
                {user.first_name} {user.last_name}
              </TableCell>
              <TableCell><StatusBadge status={user.status}/></TableCell>
              <TableCell>{user.gym_location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserDirectory;

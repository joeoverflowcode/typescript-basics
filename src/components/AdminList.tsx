import type { User } from "@/types/user.types";
import { isAdmin} from "@/types/user.types";
import AdminCard from "./AdminCard";

type AdminListProps = {
  data: User[];
};

const AdminList = ({ data }: AdminListProps) => {
  const admin = data.filter(isAdmin);
  return (
    <div className="container">
      <h3 className="h3">Admin List</h3>
      <div className="user-list">

      {admin.map((i) =>(
        <AdminCard admin={i}/>
      ))}
      </div>
    </div>
  );
};

export default AdminList;

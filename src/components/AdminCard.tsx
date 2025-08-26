import type { AdminUser } from "@/types/user.types"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getInitials } from "@/lib/member.utils"

type AdminCardProps = {
admin: AdminUser
}

const AdminCard = ({admin}:AdminCardProps ) => {
  return (
    <Card className="user-card" key={admin.id}>
        <Avatar className="ring-avatar w-[4rem] h-[4rem]">
            <AvatarImage src={admin.avatar_url} style={{backgroundColor:admin.background_color}}/>
        <AvatarFallback >{getInitials(admin.first_name, admin.last_name)}</AvatarFallback>
        </Avatar>
        <CardTitle>{admin.first_name} {admin.last_name}</CardTitle>
        <CardContent>Location: {admin.gym_location}</CardContent>
        <CardContent>Status: {admin.status}</CardContent>
        <CardDescription>Title: {admin.access_level}</CardDescription>
        <CardDescription>Staff Since: {admin.join_date}</CardDescription>
        <CardFooter>Permissions: {admin.permissions.map(p =>p.replace(/_/g, " ")).join(", ")}</CardFooter>
    </Card>
  )
}

export default AdminCard
import type { User } from "@/types/user.types"
import { isCoach } from "@/types/user.types"
import CoachCard from "./CoachCard"

type CoachListProps ={
    data: User[]
}
const CoachList = ({data}: CoachListProps) => {
    const coaches = data.filter(isCoach)
  return (
    <div className="container"><h3 className="h3">Coach List</h3>
    <div className="user-list">

    {coaches.map((coach) => (
        <CoachCard key={coach.id} coach={coach}/>
    ))}
    </div>
    </div>
  )
}

export default CoachList
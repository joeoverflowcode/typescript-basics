import type { UserGender } from '../types/user.types'
import { genderConfig } from '../config/gender.config';

interface GenderBadgeProps {
    gender: UserGender;
    className?: string;
}
const GenderBadge = ({gender, className= ''}: GenderBadgeProps) => {
  const config = genderConfig[gender]
  const Icon = config.icon
    return (
    <span
      className={`inline-flex items-center gap-x-1 px-3 py-1 rounded-full text-sm font-medium ring-1 ring-inset ${config.class} ${className}`}
    >
      <Icon className="h-4 w-4" />
      {config.label}
    </span>
  )
}

export default GenderBadge
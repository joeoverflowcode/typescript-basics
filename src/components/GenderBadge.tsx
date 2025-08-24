import type { UserGender } from '../types/user.types'
import { genderConfig } from '../config/gender.config';
import { Badge } from './ui/badge';

interface GenderBadgeProps {
    gender: UserGender;
    className?: string;
}
const GenderBadge = ({gender, className= ''}: GenderBadgeProps) => {
  const config = genderConfig[gender]
  const Icon = config.icon
    return (
    <Badge
      className={`${config.class} ${className}`}
    >
      <Icon />
      {config.label}
    </Badge>
  )
}

export default GenderBadge
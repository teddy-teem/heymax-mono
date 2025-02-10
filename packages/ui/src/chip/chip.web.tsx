import { Typography } from '../typography';

export interface ChipProps {
  text: string;
}

export function Chip({text}:ChipProps) {
  return (
    <div>
      <Typography>{text}</Typography>
    </div>
  )
}
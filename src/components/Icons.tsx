import {
  X,
  Menu,
  Mail,
  Linkedin,
  Instagram,
  type LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;
type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  close: X,
  menu: Menu,
  mail: Mail,
  linkedin: Linkedin,
  instagram: Instagram,
};

import { X, Menu, type LucideIcon } from "lucide-react";

export type Icon = LucideIcon;
type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  close: X,
  menu: Menu,
};

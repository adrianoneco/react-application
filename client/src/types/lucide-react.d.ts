declare module "lucide-react" {
  import * as React from "react";

  type IconProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string;
    strokeWidth?: number;
  };

  // A very small subset declaration to satisfy the TS server in this repo.
  // Icons are exported as React components.
  export const Home: React.FC<IconProps>;
  export const LayoutDashboard: React.FC<IconProps>;
  export const FolderKanban: React.FC<IconProps>;
  export const PanelLeftIcon: React.FC<IconProps>;
  export const Moon: React.FC<IconProps>;
  export const Sun: React.FC<IconProps>;
  export const ChevronDown: React.FC<IconProps>;
  export const ChevronRight: React.FC<IconProps>;
  export const MoreHorizontal: React.FC<IconProps>;
  export const ChevronLeft: React.FC<IconProps>;
  export const ArrowLeft: React.FC<IconProps>;
  export const ArrowRight: React.FC<IconProps>;
  export const Check: React.FC<IconProps>;
  export const Search: React.FC<IconProps>;
  export const Circle: React.FC<IconProps>;
  export const X: React.FC<IconProps>;
  export const Dot: React.FC<IconProps>;
  export const GripVertical: React.FC<IconProps>;
  export const ChevronUp: React.FC<IconProps>;
  export const AlertCircle: React.FC<IconProps>;

  // Fallback for other icons
  const _default: { [key: string]: React.FC<IconProps> };
  export default _default;
}

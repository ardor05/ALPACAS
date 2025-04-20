
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface RoleCardProps {
  title: string;
  path: string;
  className?: string;
}

export function RoleCard({ title, path, className }: RoleCardProps) {
  return (
    <Link
      to={path}
      className={cn(
        "flex items-center justify-center p-8 rounded-xl",
        "bg-[#1EAEDB]/10 border border-[#1EAEDB]/30",
        "hover:bg-[#1EAEDB]/20 transition-all duration-300",
        "shadow-[0_0_15px_rgba(30,174,219,0.3)]",
        "text-white text-xl font-semibold",
        className
      )}
    >
      {title}
    </Link>
  );
}

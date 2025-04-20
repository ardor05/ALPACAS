
import { cn } from "@/lib/utils";
import Image from "./logo-image";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <Image className="w-64 h-64" />
    </div>
  );
}

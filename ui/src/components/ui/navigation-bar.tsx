
import { cn } from "@/lib/utils";
import { FileText, ScanLine, ChartLine } from "lucide-react";

interface NavigationBarProps {
  className?: string;
}

export function NavigationBar({ className }: NavigationBarProps) {
  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 p-4",
      "flex items-center justify-center gap-8",
      "bg-black/50 backdrop-blur-lg border-t border-[#1EAEDB]/20",
      className
    )}>
      <button className="text-white hover:text-[#1EAEDB] transition-colors">
        <FileText size={24} />
      </button>
      <button className="text-white hover:text-[#1EAEDB] transition-colors">
        <ScanLine size={24} />
      </button>
      <button className="text-white hover:text-[#1EAEDB] transition-colors">
        <ChartLine size={24} />
      </button>
    </div>
  );
}

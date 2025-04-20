
import { cn } from "@/lib/utils";

interface ImageProps {
  className?: string;
}

export default function Image({ className }: ImageProps) {
  return (
    <img 
      src="/lovable-uploads/88e9cbd2-19d0-448f-b7b3-6823ca0d5b2e.png"
      alt="ALPACA"
      className={cn("rounded-full", className)}
    />
  );
}

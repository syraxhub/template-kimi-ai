import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  variant?: "default" | "outline";
}

const statusStyles: Record<string, string> = {
  // Project status
  active: "bg-green-100 text-green-800 hover:bg-green-100",
  archived: "bg-gray-100 text-gray-800 hover:bg-gray-100",
  draft: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  // Task status
  todo: "bg-gray-100 text-gray-800 hover:bg-gray-100",
  in_progress: "bg-blue-100 text-blue-800 hover:bg-blue-100",
  done: "bg-green-100 text-green-800 hover:bg-green-100",
  cancelled: "bg-red-100 text-red-800 hover:bg-red-100",
  // Priority
  low: "bg-gray-100 text-gray-800 hover:bg-gray-100",
  medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  high: "bg-orange-100 text-orange-800 hover:bg-orange-100",
  urgent: "bg-red-100 text-red-800 hover:bg-red-100",
};

export function StatusBadge({ status, variant = "default" }: StatusBadgeProps) {
  const style = statusStyles[status] || "bg-gray-100 text-gray-800";

  return (
    <Badge variant={variant} className={cn(style, "capitalize")}>
      {status.replace("_", " ")}
    </Badge>
  );
}

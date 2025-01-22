import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cname = cn(className ?? "", "container mx-auto px-8");
  return <div className={cname}>{children}</div>;
}

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type MaxWrapperProps = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper = ({className, children}: MaxWrapperProps) => {
  return (
    <div className={cn("h-full mx-auto w-full max-h-screen-xl px-2.5 md:px-20", className)}>{children}</div>
  );
};
export default MaxWidthWrapper
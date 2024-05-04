import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { IconBadge } from "../IconBadge";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <input
          type={type}
          className={cn(
            "bg-secondary bg-opacity-50 flex h-9 w-full text-white rounded-md  px-3 py-2 text-[11px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            Icon ? "pr-8" : "",
            className
          )}
          ref={ref}
          {...props}
        />
        {Icon && (
          <div className="absolute right-1 top-1/2 p-[3px] transform -translate-y-1/2 rounded-full flex items-center justify-center bg-rose-600 text-white">
            <Icon className="p-1 h-6 w-6" />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

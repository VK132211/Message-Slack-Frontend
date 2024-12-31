import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export const Hint = ({ align, side, label, children }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align} className="bg-black text-white rounded-lg p-2 border border-white/5">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

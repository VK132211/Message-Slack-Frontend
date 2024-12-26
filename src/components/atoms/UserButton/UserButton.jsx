import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useAuth } from "@/hooks/context/useAuth";
import { LogOutIcon, Settings } from "lucide-react";
export const UserButton = () => {
  const { auth } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-70 transition">
          <AvatarImage src={auth?.user?.avatar} />
          <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem> <Settings className="size-4 mr-2 h-10"/> Settings</DropdownMenuItem>
        <DropdownMenuItem> <LogOutIcon className="size-4 mr-2 h-10"/> Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

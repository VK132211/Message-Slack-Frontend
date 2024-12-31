import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/hooks/context/useAuth";
import { LogOutIcon, PencilIcon, Settings } from "lucide-react";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
export const UserButton = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();
  function openWorkspaceCreateModal() {
    setOpenCreateWorkspaceModal(true);
  }
  async function handleLogout() {
    await logout();
    toast({
      title: "Successfully signed out",
      type: "success",
    });
    navigate("/auth/signin");
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-70 transition">
          <AvatarImage src={auth?.user?.avatar} />
          <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={openWorkspaceCreateModal}>
          <PencilIcon className="size-4 mr-2 h-10" /> create workspace
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="size-4 mr-2 h-10" /> Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon className="size-4 mr-2 h-10" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useResetJoinCode } from "@/hooks/apis/workspaces/useResetJoinCode";
import { useToast } from "@/hooks/use-toast";
import { CopyIcon, RefreshCcwIcon } from "lucide-react";

export const WorkspaceInviteModal = ({
  openInviteModal,
  setOpenInvitemModal,
  workspaceName,
  joinCode,
  workspaceId,
}) => {
  const { toast } = useToast();

  const { resetJoinCodeMutation } = useResetJoinCode(workspaceId);

  async function handleCopy() {
    const inviteLink = `${joinCode}`;
    await navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Link copied to clipbaord",
      type: "success",
    });
  }

  async function handleResetCode() {
    try {
      await resetJoinCodeMutation();
      toast({
        title: "Join code reset succesfully",
        type: "success",
      });
    } catch (error) {
      console.log("Error in resetting join code", error);
    }
  }
  return (
    <Dialog open={openInviteModal} onOpenChange={setOpenInvitemModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Invite people to {workspaceName}</DialogTitle>
          <DialogDescription>Use the code shown below to invite people to workspace</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col justify-center items-center py-10 gap-y-4">
          <p className="text-4xl font-bold uppercase">{joinCode}</p>
          <Button size="sm" variant="ghost" onClick={handleCopy}>
            Copy Code
            <CopyIcon className="size-4 ml-2" />
          </Button>
          <a href={`/workspaces/join/${workspaceId}`} target="_blank" rel="noreferrer" className="text-blue-500">
            Redirect to join page
          </a>
        </div>

        <div className="flex flex-col justify-center w-full">
          <Button variant="outline" onClick={handleResetCode}>
            Reset join code
            <RefreshCcwIcon className="sie-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

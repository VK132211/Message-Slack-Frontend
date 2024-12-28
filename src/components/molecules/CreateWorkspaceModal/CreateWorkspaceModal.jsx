import { useCreateWorkspace } from "@/hooks/apis/workspaces/useCreateWorkspace";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";
import { useQueryClient } from "@tanstack/react-query";

export const CreateWorkspaceModal = () => {

  const queryClient = useQueryClient()
  const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();
  const { isPending, createWorkspaceMutation } = useCreateWorkspace();
  const [workspaceName, setWorkspaceName] = useState("");
  const naviagate = useNavigate();
  function handleClose() {
    setOpenCreateWorkspaceModal(false);
  }
  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      const data = await createWorkspaceMutation({ name: workspaceName });
      naviagate(`/workspaces/${data._id}`);
      queryClient.invalidateQueries('fetchWorkspaces')
    } catch (error) {
      console.log("Failed to create workspace", error);
    } finally {
      setWorkspaceName("");
      setOpenCreateWorkspaceModal(false);
    }
  }
  return (
    <Dialog open={openCreateWorkspaceModal} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new workspace</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleFormSubmit}>
          <Input
            required
            disabled={isPending}
            minLength={3}
            placeholder="workspace name"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />
          <div className="flex justify-end mt-5">
            <Button disabled={isPending}>Create workspace</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

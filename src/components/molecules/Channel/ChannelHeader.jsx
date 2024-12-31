import { FaChevronDown } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useUpdateChannel } from "@/hooks/apis/channels/useUpdateChannel";
import { useParams } from "react-router-dom";
import { useCurrentWorkspace } from "@/hooks/context/useCurrentWorkspace";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
export const ChannelHeader = ({ name }) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const { workspace } = useCurrentWorkspace();
  const [renameValue, setRenameValue] = useState(name);
  const [edit, setEdit] = useState(false);
  const { channelId } = useParams();
  const { isPending, updateChannelMutation } = useUpdateChannel(channelId);
  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      await updateChannelMutation(renameValue);
      queryClient.invalidateQueries(`fetchWorkspaceById-${workspace?._id}`);
      setEdit(false);
      toast({
        title: "channel updated successfully",
        type: "success",
      });
    } catch (error) {
      console.log("Error in updating channel", error);
      toast({
        title: "Error in updating channel",
        type: "error",
      });
    }
  }
  return (
    <div className="bg-white border-b h-[50px] flex items-center px-4 overflow-hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-lg font-semibold px-2 w-auto overflow-hidden">
            <span># {name} </span>
            <FaChevronDown className="size-3 ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle># {name}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4 flex flex-col gap-y-2">
            <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-100">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Channel name</p>
                <div className="text-sm font-semibold">
                  <Dialog>
                    <DialogTrigger asChild onClick={() => setEdit(true)}>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Channel</DialogTitle>
                        <DialogDescription>
                          Make changes to your channel here. Click save when you're done.
                        </DialogDescription>
                      </DialogHeader>

                      <form className="space-y-4" onSubmit={handleFormSubmit}>
                        <Input
                          value={renameValue}
                          onChange={(e) => setRenameValue(e.target.value)}
                          required
                          autoFocus
                          minLength={3}
                          maxLength={50}
                          disabled={isPending}
                          placeholder="Channel name"
                        />
                        <DialogFooter>
                          <Button type="submit" disabled={isPending}>
                            Save changes
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <p className="text-sm">{name}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { useJoinWorkspaceRequest } from "@/hooks/apis/workspaces/useJoinWorkspace";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import VerificationInput from "react-verification-input";

export const JoinPage = () => {
  const { workspaceId } = useParams();
  const { toast } = useToast();
  const { joinWorkspaceMutation } = useJoinWorkspaceRequest(workspaceId);
  const navigate = useNavigate();
  async function handleAddMemberToWorkspace(joinCode) {
    try {
      await joinWorkspaceMutation(joinCode);
      toast({
        title: "You have been added to workspace successfully",
        type: "success",
      });
      navigate(`/workspaces/${workspaceId}`);
    } catch (error) {
      console.log(`Error in adding member to workspace`, error);
    }
  }

  return (
    <div className="h-[100vh] flex flex-col gap-y-8 item-center justify-center p-8 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <div className="flex flex-col gap-y-2 items-center">
          <h1 className="text-3xl font-bold">Join workspace</h1>
          <p>Enter the code to join workspace</p>
        </div>
        <VerificationInput
          onComplete={handleAddMemberToWorkspace}
          length={6}
          classNames={{
            container: "flex gap-x-2",
            character:
              "h-auto rounded-md border border-gray-300 flex items-center justify-center text-lg font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
            characterInactive: "bg-muted",
            characterFilled: "bg-white text-black",
            characterSelected: "bg-white text-black",
          }}
          autoFocus
        />
      </div>

      <div className="flex gap-x-4">
        <Button size="lg" variant="outline">
          <Link to={`/workspaces/${workspaceId}`}>Back to the workspace</Link>
        </Button>
      </div>
    </div>
  );
};

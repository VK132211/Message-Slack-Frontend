import { WorkspacePanelHeader } from "@/components/molecules/Workspace/WorkspacePanelHeader";
import { useGetWorkspaceById } from "@/hooks/apis/workspaces/useGetWorkspaceById";
import { AlertTriangleIcon, Loader } from "lucide-react";
import { useParams } from "react-router-dom";

export const WorkspacePanel = () => {
  const { workspaceId } = useParams();
  const { workspace, isFetching, isSuccess } = useGetWorkspaceById(workspaceId);
  if (isFetching) {
    return (
      <div className="flex flex-col gap-y-2 items-center justify-center h-full text-white">
        <Loader className="animate-spin size-6 text-white" />
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="flex flex-col gap-y-2 items-center justify-center h-full text-white">
        <AlertTriangleIcon className="size-6 text-white" />
        Something went wrong
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full bg-slack-medium">
      <WorkspacePanelHeader workspace={workspace} />
    </div>
  );
};

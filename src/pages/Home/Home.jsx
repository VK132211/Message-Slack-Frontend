import { UserButton } from "@/components/atoms/UserButton/userButton";
import { useFetchWorkspace } from "@/hooks/apis/workspaces/useFetchWorkspace";
import { useEffect } from "react";

export const Home = () => {
  const { isFetching, workspaces } = useFetchWorkspace();
  useEffect(() => {
    if (isFetching) return;

    console.log("Workspaces downloaded is", workspaces);

    if (workspaces.length === 0 || !workspaces) {
      console.log("No workspaces found, creating one");
    }
  }, [isFetching, workspaces]);
  return (
    <div>
      <h1>Home</h1>
      <UserButton />
    </div>
  );
};

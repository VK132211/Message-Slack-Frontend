import WorkspacePreferencesModalContext from "@/context/WorkspacePreferencesModalContext"
import { useContext } from "react"

export const useWorkspacePrefernecesModal =()=>{
    return useContext(WorkspacePreferencesModalContext)
}
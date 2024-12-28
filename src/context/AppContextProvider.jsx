import {AuthContextProvider} from "./AuthContext";
import combineContext from "@/utils/combineContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePreferencesModalContextProvider } from "./WorkspacePreferencesModalContext";

export const AppContextProvider = combineContext(AuthContextProvider, CreateWorkspaceContextProvider, WorkspacePreferencesModalContextProvider);
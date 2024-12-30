import {AuthContextProvider} from "./AuthContext";
import combineContext from "@/utils/combineContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePreferencesModalContextProvider } from "./WorkspacePreferencesModalContext";
import { CreateChannelContextProvider } from "./CreateChannelContext";
import { WorkspaceContextProvider } from "./WorkspaceContext";

export const AppContextProvider = combineContext(AuthContextProvider, CreateWorkspaceContextProvider, WorkspacePreferencesModalContextProvider, CreateChannelContextProvider, WorkspaceContextProvider);
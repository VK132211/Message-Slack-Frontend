import {AuthContextProvider} from "./AuthContext";
import combineContext from "@/utils/combineContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePreferencesModalContextProvider } from "./WorkspacePreferencesModalContext";
import { CreateChannelContextProvider } from "./CreateChannelContext";
import { WorkspaceContextProvider } from "./WorkspaceContext";
import { SocketContextProvider } from "./SocketContext";

export const AppContextProvider = combineContext(SocketContextProvider, AuthContextProvider, WorkspaceContextProvider, CreateWorkspaceContextProvider, WorkspacePreferencesModalContextProvider, CreateChannelContextProvider);
import {AuthContextProvider} from "./AuthContext";
import combineContext from "@/utils/combineContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";
import { WorkspacePreferencesModalContextProvider } from "./WorkspacePreferencesModalContext";
import { CreateChannelContextProvider } from "./CreateChannelContext";
import { WorkspaceContextProvider } from "./WorkspaceContext";
import { SocketContextProvider } from "./SocketContext";
import { ChannelMessagesProvider } from "./ChannelMessages";

export const AppContextProvider = combineContext(ChannelMessagesProvider, SocketContextProvider, AuthContextProvider, WorkspaceContextProvider, CreateWorkspaceContextProvider, WorkspacePreferencesModalContextProvider, CreateChannelContextProvider);
import {AuthContextProvider} from "./AuthContext";
import combineContext from "@/utils/combineContext";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext";

export const AppContextProvider = combineContext(AuthContextProvider, CreateWorkspaceContextProvider);
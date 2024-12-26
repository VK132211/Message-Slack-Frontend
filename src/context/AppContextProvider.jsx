import {AuthContextProvider} from "./AuthContext";
import combineContext from "@/utils/combineContext";

export const AppContextProvider = combineContext(AuthContextProvider);
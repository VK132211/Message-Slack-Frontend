import { Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Auth } from "./pages/Auth/Auth";
import { SigninCard } from "@/components/organisms/Auth/SigninCard";
import {Notfound} from '@/pages/Notfound/Notfound';
import { SignupContainer } from "./components/organisms/Auth/SignupContainer";
function App() {
  const queryClient =new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/auth/signup" element={<Auth><SignupContainer/></Auth>}></Route>
      <Route path="/auth/signin" element={<Auth><SigninCard/></Auth>}></Route>

      <Route path="/*" element={<Notfound/>}></Route>
    </Routes>
    </QueryClientProvider>
  );
}

export default App;

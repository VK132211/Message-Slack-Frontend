import { Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Toaster } from '@/components/ui/toaster';
import { Auth } from "./pages/Auth/Auth";
import {Notfound} from '@/pages/Notfound/Notfound';
import { SignupContainer } from "./components/organisms/Auth/SignupContainer";
import { SigninContainer } from "./components/organisms/Auth/SigninContainer";
function App() {
  const queryClient =new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/auth/signup" element={<Auth><SignupContainer/></Auth>}></Route>
      <Route path="/auth/signin" element={<Auth><SigninContainer/></Auth>}></Route>

      <Route path="/*" element={<Notfound/>}></Route>
    </Routes>
    <Toaster/>
    </QueryClientProvider>
  );
}

export default App;

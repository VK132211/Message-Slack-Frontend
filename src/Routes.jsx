import { Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
import {Notfound} from '@/pages/Notfound/Notfound';
import { SignupContainer } from "./components/organisms/Auth/SignupContainer";
import { SigninContainer } from "./components/organisms/Auth/SigninContainer";
import { ProtectedRoute } from "./components/molecules/ProtectedRoute/ProtectedRoute";
export const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
          <Route path="/auth/signin" element={<Auth><SigninContainer /></Auth>} />
          <Route path="/home" element={<ProtectedRoute><Auth><h1>Home</h1></Auth></ProtectedRoute>} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
    );
    }
import { Routes, Route } from "react-router-dom";
import { Auth } from "./pages/Auth/Auth";
function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;

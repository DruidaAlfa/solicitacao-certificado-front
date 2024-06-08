import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import FazerSolicitacao from "../pages/FazerSolicitacao"
import Listagem from "../pages/Listagem";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/FazerSolicitacao" element={<FazerSolicitacao />} />
        <Route path="/Listagem" element={<Listagem />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import FazerSolicitacao from "../pages/FazerSolicitacao"
import Listagem from "../pages/Listagem";
import Upload from "../pages/Upload";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/FazerSolicitacao" element={<FazerSolicitacao />} />
        <Route path="/" element={<FazerSolicitacao />} />
        <Route path="/Listagem" element={<Listagem />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

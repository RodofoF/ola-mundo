import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";


function AppRoutes() {
  return (
  //  window.location.pathname === '/' ? <Inicio /> : <SobreMim/>
  <BrowserRouter>
  <Menu/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sobremim" element={<SobreMim/>}/>
      <Route path="*" element={<div>404</div>}/>
    </Routes>
  <Rodape />
  </BrowserRouter>
  );
}

export default AppRoutes;

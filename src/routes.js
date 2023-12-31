import { BrowserRouter, Routes, Route } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao";
import Post from './paginas/Post'
import NaoEncontrado from "./componentes/NaoEncontrado";


function AppRoutes() {
  return (
  //  window.location.pathname === '/' ? <Inicio /> : <SobreMim/>
  <BrowserRouter>
  <Menu/>
    <Routes>
      <Route path="/" element={<PaginaPadrao />}>
        <Route index element={<Inicio/>}/>
        <Route path="sobremim" element={<SobreMim/>}/>
        <Route path="posts/:id" element={<Post/>}/>
      </Route>
      <Route path="*" element={<NaoEncontrado/>}/>
    </Routes>
  <Rodape />
  </BrowserRouter>
  );
}

export default AppRoutes;

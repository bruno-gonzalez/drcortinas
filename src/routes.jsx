import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cabecalho from "./components/Cabecalho";
import Inicio from "./Pages/Inicio";
import BotaoWpp from "./components/BotaoWpp";
import Sobre from "./Pages/Sobre";
import Rodape from "./components/Rodape";

export default function AppRouter(){
   return(
      <BrowserRouter>
         <Cabecalho />
         <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="sobre" element={<Sobre />} />
         </Routes>
         <BotaoWpp />
         <Rodape />
      </BrowserRouter>
   )
}
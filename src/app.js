import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/startPage";  // Certifique-se de que o caminho está correto
import NamePage from "./pages/namePage";
import StartGridPage from "./pages/startGridpage";
import PGP from "./pages/playingGridPage";
import {io} from "socket.io-client";

function App() {
    
    return (
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/NamePage" element={<NamePage/>} />
          <Route path = "/StartPage" element = {<StartPage />}/>
          <Route path = "/StartGridPage" element = {<StartGridPage />}/>
          <Route path = "/PlayingGridPage" element = {<PGP/>}/>
        </Routes>
    );
}

export default App;

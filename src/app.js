import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from "./pages/startPage";  // Certifique-se de que o caminho está correto
import NamePage from "./pages/namePage";

function App() {
    return (
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/NamePage" element={<NamePage />} />
        </Routes>
    );
}

export default App;
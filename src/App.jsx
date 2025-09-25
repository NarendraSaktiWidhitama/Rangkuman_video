import React from "react";
import { Routes, Route } from "react-router-dom";
import Tabeltailwind from "./Componen/Tabeltailwind";
import Register from "./pages/Register";
import Tambahdata from "./pages/Tambahdata";
import TabelData from "./pages/Tabeldata";
import Editdata from "./pages/Editdata";
import Sidnav from "./Componen/sidnav";
import Dashboard from "./pages/Dashboard";

function App() {
  return ( 
    <div>
      <Sidnav />
    <div>
      <Routes>
        <Route path="/" element={<Tabeltailwind />} />
        <Route path="/RegisterPage" element={<Register />} />
        <Route path="/home" element={<Tabeltailwind />} />
        <Route path="/Tambahdata" element={<Tambahdata />} />
        <Route path="/Tabeldata" element={<TabelData />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Editdata/:id" element={<Editdata />} />
      </Routes> 
      </div>
      </div>
  );
}

export default App;

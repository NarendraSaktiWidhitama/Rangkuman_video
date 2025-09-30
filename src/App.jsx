import React from "react";
import { Routes, Route } from "react-router-dom";
import Tabeltailwind from "./Componen/Tabeltailwind";
import Register from "./pages/Register";
import Tambahdata from "./pages/Tambahdata";
import Tambahmenu from "./pages/Tambahmenu";
import TabelData from "./pages/Tabeldata";
import Tabelmenu from "./pages/Tabelmenu";
import Editdata from "./pages/Editdata";
import Editmenu from "./pages/Editmenu";
import Sidnav from "./Componen/Sidnav";
import Dashboard from "./pages/Dashboard";
import Profile from "./Componen/Profile";

function App() {
  return ( 
    <div>
      <Sidnav />
    <div>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/home" element={<Tabeltailwind />} />
        {/* <Route path="/RegisterPage" element={<Register />} /> */}
        <Route path="/Tambahdata" element={<Tambahdata />} />
        <Route path="/Tambahmenu" element={<Tambahmenu />} />
        <Route path="/Tabeldata" element={<TabelData />} />
        <Route path="/Tabelmenu" element={<Tabelmenu />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Editdata/:id" element={<Editdata />} />
        <Route path="/Editmenu/:id" element={<Editmenu />} />
      </Routes> 
      </div>
      </div>
  );
}

export default App;

import { Routes, Route }from "react-router-dom";
import Tabeltailwind from '../pages/tabeltailwind';
import LOGIN from '../pages/LOGIN';
import Landingpage from "../pages/Landingpage";
import Register from "../pages/Register";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LOGIN/>}/>
    </Routes>
  )
}
export default App
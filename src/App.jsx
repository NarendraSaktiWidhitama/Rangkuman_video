import { Routes, Route }from "react-router-dom";
import Tabeltailwind from '../pages/tabeltailwind';
import LOGIN from '../pages/LOGIN';
import Landingpage from "../pages/Landingpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage/>}/>
    </Routes>
  )
}
export default App
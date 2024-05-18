import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Horizontalchart from "./Charrt";

import Piechart from "./Piechart";
import Colors from "./Colors";
import Prints from "./Prints";
import Fabrics from "./Fabrics";
import Shapes from "./Shapes";
import Main from "./Main";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/chart" element={<Horizontalchart/>}/>
      <Route path="/pie" element={<Piechart/>}/>
      <Route path="/colors" element={<Colors/>}/>
      <Route path="/shapes" element={<Shapes/>}/>
      <Route path="/prints" element={<Prints/>}/>
      <Route path="/fabrics" element={<Fabrics/>}/>
    
    </Routes>
  </BrowserRouter>
  );
}

export default App;
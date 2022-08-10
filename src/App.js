import Home from "./pages/Home";
import { Personajes } from "./pages/Personajes";
import Planetas from "./pages/Planetas";
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Personajes' element={<Personajes/>}/>
      <Route path='/Planetas' element={<Planetas/>}/>
    </Routes>
  );
}

export default App;

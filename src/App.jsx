import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Planets from './pages/Planets';
import AddCharacter from './pages/AddCharacter';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="characters" element={<Characters />}/>
        <Route path="planets" element={<Planets />}/>
        <Route path="addcharacters" element={<AddCharacter/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

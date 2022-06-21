import './styles/App.css';
import Sidebar from './Components/Menu/Sidebar'
import { BrowserRouter as Router,Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
//Componentes de las paginas
import AgregarEquipo from './pages/AgregarEquipo';
import BuscarEquipo from './pages/BuscarEquipo';
import EliminarEquipo from './pages/EliminarEquipo';
import DevolucionEquipo from './pages/DevolucionEquipo';
import EditarEquipo from './pages/EditarEquipo';
import SelectAddEquipos from './Components/AltaEquipos/SelectAddEquipos';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/agregarEquipo' exact element={<AgregarEquipo/>} />
        <Route path='/buscarequipo' exact element={<BuscarEquipo/>}/>
        <Route path='/eliminarequipo' exact element={<EliminarEquipo/>}/>
        <Route path='/devolucionEquipo' exact element={<DevolucionEquipo/>} />
        <Route path='/editarEquipo/:id' exact element={<EditarEquipo/>} />
        <Route path='/selectAddEquipos' exact element={<SelectAddEquipos/>} />
        <Route path='/team' exact element={<Team/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;

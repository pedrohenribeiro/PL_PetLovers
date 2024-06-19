import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Clientes from './pages/Clientes/Clientes';
import Cadastros from './pages/Cadastros';
import Navbar from './components/layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditarCliente from './pages/Clientes/EditarCliente';
function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/" element={<Clientes />} > </Route>
            <Route path="/cadastrar" element={<Cadastros />} > </Route>
            <Route path="/atualizar" element={<EditarCliente />} > </Route>
        </Routes>
    </Router>

  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Clientes from './pages/Clientes/Clientes';
import Cadastros from './pages/Cadastros';
import Servicos from './pages/Servicos/Servicos';
import Produtos from './pages/Produtos/Produtos';
import Pets from './pages/Pets/Pets';
import Navbar from './components/layout/Navbar';
import Compras from './pages/Compras';
import Estatisticas from './pages/Estatisticas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/" element={<Clientes />} > </Route>
            <Route path="/servicos" element={<Servicos />} > </Route>
            <Route path="/produtos" element={<Produtos />} > </Route>
            <Route path="/pets" element={<Pets />} > </Route>
            <Route path="/estatisticas" element={<Estatisticas />} > </Route>
            <Route path="/cadastrar" element={<Cadastros />} > </Route>
            <Route path="/compras" element={<Compras/>} > </Route>
        </Routes>
    </Router>

  );
}

export default App;

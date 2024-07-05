import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';
import FormularioCategorias from './components/categoria/formularioCategorias/FormularioCategorias';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import CardCategoria from './components/categoria/cardCategoria/CardCategoria';

function App() {
  return (
<>
<BrowserRouter> 
<Navbar />
<div className='min-h-[80vh] bg-indigo-900'>
<Routes>
              <Route path='/' element={<Home />}/>
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroTema" element={<FormularioCategorias />} />
              <Route path="/editarTemas/:id" element={<FormularioCategorias />} />
              <Route path="/listarTemas/:id" element={<ListaCategorias />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategorias />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
</Routes>
</div>

<Footer />
</BrowserRouter>
</>
  );
}

export default App;

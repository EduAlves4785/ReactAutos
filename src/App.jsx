import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from './Pages/Home/Home'
import { Ajuda } from './Pages/Ajuda/Ajuda';
import { Anuncios } from './Pages/Anuncios/Anuncios';
import { Acesso } from './Pages/Acesso/Acesso';
import { Conta } from './Pages/Conta/Conta';
import { Anuncio } from './Pages/Anuncio/Anuncio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/anuncios" element={<Anuncios/>}/>
        <Route path="/anuncio/:id" element={<Anuncio/>}/>
        <Route path="/acesso" element={<Acesso/>}/>
        <Route path="/conta/:cpf" element={<Conta/>}/>
        <Route path="/ajuda" element={<Ajuda/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

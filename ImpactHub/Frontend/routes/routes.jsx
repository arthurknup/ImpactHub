import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Gastos from '../pages/Gastos/Gastos'
import Receitas from '../pages/Receitas/Receitas'
import Usuarios from '../pages/Usuarios/Usuarios'
import NotFound from '../pages/NotFound/NotFound'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
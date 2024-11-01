import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import './styles/styles.css'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import QuienesSomos from './pages/QuienesSomos'
import Servicios from './pages/Servicios'
import { UserProvider } from './context/UsuarioContext'
import RutaPrivada from './pages/RutaPrivada'
import PanelControl from './pages/PanelControl'
import Login from './pages/Login'
import NuevoServicio from './pages/NuevoServicio'
import BorrarServicio from './pages/BorrarServicio'
import EditarServicio from './pages/EditarServicio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>

    <Router>

      <UserProvider>

        <Header />

        <Routes>

          <Route path='/' element={<Inicio />} />
          <Route path='/quienes' element={<QuienesSomos />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/panel' element={<RutaPrivada componente={<PanelControl />} />} />
          <Route path="/nuevoServicio" element={<RutaPrivada componente={<NuevoServicio />} />} />
          <Route path="/borrarServicio/:id" element={<RutaPrivada componente={<BorrarServicio />} />} />
          <Route path="/editarServicio/:id" element={<RutaPrivada componente={<EditarServicio />} />} />

        </Routes>


        <Footer />

      </UserProvider>

    </Router>


  </>
)

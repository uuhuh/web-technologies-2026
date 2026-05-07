import './App.css'
import { AsteroidsPage } from './pages/AsteroidsPage'
import { DestroymentPage } from './pages/DestroymentPage'
import { AsteroidPage } from './pages/AsteroidPage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AsteroidsPage />} />
      <Route path='/destroyment' element={<DestroymentPage />} />
      <Route path='asteroids/:asteroidId' element={<AsteroidPage />} />
      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

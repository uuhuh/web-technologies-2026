import './App.css'
import { AsteroidsPage } from './pages/AsteroidsPage'
import { DestroymentPage } from './pages/DestroymentPage'
import { AsteroidPage } from './pages/AsteroidPage'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import { useReducer, useEffect } from 'react'
import { AsteroidsContext } from './contexts/AsteroidsContext'
import { reducer, initialAsteroidsState } from './contexts/asteroidReducer'
import { AsteroidController } from './AsteroidController'

function App() {
  const [state, dispatch] = useReducer(reducer, initialAsteroidsState)

  useEffect(() => {
    AsteroidController.getAsteroids().then(asteroids => {
      dispatch({ type: "SET_ASTEROIDS", payload: asteroids })
    })
  }, [])

  return (
    <AsteroidsContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AsteroidsPage />} />
          <Route path='/destroyment' element={<DestroymentPage />} />
          <Route path='asteroids/:asteroidId' element={<AsteroidPage />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AsteroidsContext.Provider>
  )
}

export default App
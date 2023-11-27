import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import './App.css'
const MovieList = lazy(() => import('./pages/movies/MovieList'))

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/movies' element={<MovieList />} />
            <Route path='/' element={<Navigate to='/movies' replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
}

export default App

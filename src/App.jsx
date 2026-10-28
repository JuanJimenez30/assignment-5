
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from './pages/Gallery'
import ShowDetail from './pages/ShowDetail'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/shows/:id" element={<ShowDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

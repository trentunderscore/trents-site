import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import HireMe from './pages/hireme'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hireme" element={<HireMe />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

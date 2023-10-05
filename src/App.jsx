import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import { AnimatePresence } from 'framer-motion'
import Skills from './components/Skills'

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/skills" element={<Skills />} />
          </Route>
        </Routes>
      </Router>
  )
}

export default App

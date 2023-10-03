import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Layout />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

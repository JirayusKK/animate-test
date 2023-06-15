import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

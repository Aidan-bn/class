import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Content from './components/Contents'
import Footer from './components/Footer'
import Nav from './components/Header'
import Primary from './components/Primary'
import Olevel from './components/Olevel'
import Alevel from './components/Alevel'
import Teacher from './components/Teacher'
import Others from './components/Others'
import Login from './components/Login'
import Register from './components/Register'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/primary' element={<Primary />} />
          <Route path='/olevel' element={<Olevel />} />
          <Route path='/advanced' element={<Alevel />} />
          <Route path='/teacher' element={<Teacher />} />
          <Route path='/others' element={<Others />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

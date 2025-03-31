import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './routes/Error'
import Login from './routes/Login'
import Filtro from './routes/Filtro' 
import Jogador from './routes/Jogador'
import Aside from './routes/Aside'
import Home from './routes/Home'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Filtro" element={<Filtro/>}/>
        <Route path="/Jogador" element={<Jogador/>}/>

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Settings from './Pages/Settings'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

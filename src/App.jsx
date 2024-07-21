import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import UseEffect from './components/UseEffect'



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<h1>This is contact page</h1>}></Route>
      <Route path='/useeffect' element={<UseEffect/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

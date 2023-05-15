import React from 'react'
import Nav1 from './Components/Nav1'
import NewPost from './Components/NewPost'
import ReadData from './Components/ReadData'
import Footer from './Components/Footer'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Nav1/>
      <Routes>
        <Route exact path='/' element={<NewPost/>}/>
        <Route exact path='/read' element={<ReadData/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
  
    </div>
  )
}

export default App

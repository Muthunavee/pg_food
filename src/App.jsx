import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Nav from './Nav.jsx'
import Viewproduct from './Viewproduct.jsx'
import Addproduct from './AddProduct.jsx'
import Home from './Home.jsx'
import Pagenotfound from './Pagenotfound.jsx'
import Updateproduct from './Updateproduct.jsx'

const App = () => {
  return (
    <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<Home/>} />
           <Route path='/addproduct' element={<Addproduct />}/>
            <Route path='/viewproduct' element={<Viewproduct />} />
            <Route path='*' element={<Pagenotfound/>}/>
            <Route path='/updateproduct/:id' element={<Updateproduct/>} />
        </Routes>

    </Router>
  )
}

export default App
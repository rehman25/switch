import React from 'react'
import { BrowserRouter as Router , Routes , Route, useParams } from 'react-router-dom'
import SignIn from '../screens/SignIn/SignIn'
import Home from '../screens/Home/Home'



function Routing() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/Home" exact element={<Home />} />
        </Routes>
    </Router>
  )
}

export default Routing

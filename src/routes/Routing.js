import React from 'react'
import { BrowserRouter as Router , Routes , Route, useParams } from 'react-router-dom'
import SignIn from '../screens/SignIn/SignIn'
import Home from '../screens/Home/Home'
import SignUp from '../screens/SignUp/Signup'
import Package from '../screens/packages/packages'



function Routing() {
  
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          <Route path="/Package" exact element={<Package />} />
        </Routes>
    </Router>
  )
}

export default Routing

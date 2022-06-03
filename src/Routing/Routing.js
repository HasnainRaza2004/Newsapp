import React from 'react'
import {BrowserRouter as Route, Router, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'

const Routing = () => {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/*' element={<Dashboard />}/>
          </Routes>
      </Router>
    </>
    )
  
}

export default Routing
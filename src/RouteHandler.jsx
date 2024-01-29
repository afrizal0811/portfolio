import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Header from './header/Header'
import { StyledMain } from './main/StyledComponents'

const RouteHandler = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<StyledMain />}
      />
    </Routes>
  )
}

export default RouteHandler

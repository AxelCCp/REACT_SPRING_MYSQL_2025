import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

export const App = () => {

  return (
    <>
     
      <Routes>

        <Route path='/*' element={<AppRoutes/>}/>

      </Routes>

    </>
  );
}

export default App;

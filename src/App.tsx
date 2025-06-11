import { useState } from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { CantrzLoader } from './loader/CantrzLoader'

function App() {
   const Routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<HomePage/>} loader={CantrzLoader} />
        <Route path='/aboutpage/:cca2' element={<AboutPage/>} />
      </Route>
    )
   )

  return (
    <RouterProvider router={Routes} />
  )
}

export default App

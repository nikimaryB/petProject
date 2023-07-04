import React from 'react'
import { Counter } from './components/Counter'
import './index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'

export default function App() {
  return (
    <>
    <div className='app'>
      <Counter/>
      <Link to={'/about'}>AboutPage</Link>
      <Link to={'/'}>MainPage</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync/>}/>
          <Route path='/' element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
    </>
  )
}

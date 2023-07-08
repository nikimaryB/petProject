import React, { useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'


export default function App() {
  const {theme, toggleTheme} = useTheme();
  const bool = true;
  return (
    <>
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/about'}>AboutPage</Link>
      <Link to={'/'}>MainPage</Link>
      <button onClick={toggleTheme}>change Theme</button>
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

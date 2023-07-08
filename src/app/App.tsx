import React, { useContext, useState } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { classNames } from 'shared/lib/classNames/classNames'


export default function App() {
  const {theme, toggleTheme} = useTheme();
  return (
    <>
    <div className={classNames('app', {}, [theme])}>
      <Link to={'/about'}>AboutPage</Link>
      <Link to={'/'}>MainPage</Link>
      <button onClick={toggleTheme}>change Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
    </>
  )
}

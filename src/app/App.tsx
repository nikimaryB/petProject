import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from 'widgets/Navbar';


export default function App() {
  const {theme, toggleTheme} = useTheme();
  return (
    <>
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
      <button onClick={toggleTheme}>change Theme</button>
    </div>
    </>
  )
}

import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { AppRoutes, RoutePath } from 'shared/config/RouteConfig/RouteConfig'


export default function App() {
  const {theme, toggleTheme} = useTheme();
  return (
    <>
    <div className={classNames('app', {}, [theme])}>
      <Link to={RoutePath[AppRoutes.ABOUT]}>AboutPage</Link>
      <Link to={RoutePath[AppRoutes.MAIN]}>MainPage</Link>
      <button onClick={toggleTheme}>change Theme</button>
      <AppRouter/>
    </div>
    </>
  )
}

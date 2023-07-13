import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/Router'
import { Navbar } from 'widgets/Navbar';


export default function App() {
  const {theme} = useTheme();
  return (
    <>
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <AppRouter/>
    </div>
    </>
  )
}

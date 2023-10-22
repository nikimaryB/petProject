import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAction } from 'entities/User';

export default function App() {

    const {theme} = useTheme();
    const dispatch = useDispatch();
    
    useEffect( ()=> {
        dispatch(userAction.initAuthData());
    }, [dispatch]);

    return (
        <>
            <div className={classNames('app', {}, [theme])}>
                <Suspense fallback={<div>...loading</div>}>
                    <Navbar/>
                    <div className='content-page'>
                        <Sidebar/>
                        <AppRouter/>
                    </div>
                </Suspense>
            </div>
        </>
    );
}

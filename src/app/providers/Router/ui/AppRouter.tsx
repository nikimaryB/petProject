import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/RouteConfig/RouteConfig';
import { LoaderPage } from 'widgets/LoaderPage';

function AppRouter() {
    const isAuth = useSelector(getUserAuthData);
    const config = useMemo(() => {
        return Object.values(RouteConfig).filter((elem)=> {
            if( elem.authOnly && !isAuth) return false;
            return true;
        });
    },[isAuth]);

    return (
        <Suspense fallback={<LoaderPage/>}>
            <Routes>
                {config.map(({ element, path }) => (
                    <Route 
                        key={path} 
                        element={
                            (<div className="page-wrapper">
                                {element}
                            </div>)
                        } 
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);







import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, RouteConfig } from 'shared/config/RouteConfig/RouteConfig';
import { LoaderPage } from 'widgets/LoaderPage';
import {RequireAuth} from './RequireAyrh';

function AppRouter() {
        
    const renderWithWrapper = useCallback((route: AppRoutesProps ) => {
        const element = 
            <Suspense fallback={<LoaderPage/>}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        ;
        return (
            <Route 
                key={route.path} 
                element={route.authOnly? <RequireAuth>{element}</RequireAuth> : element } 
                path={route.path}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(RouteConfig).map(renderWithWrapper)}
        </Routes>
    );
}

export default memo(AppRouter);







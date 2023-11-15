import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/RouteConfig/RouteConfig';
import { LoaderPage } from 'widgets/LoaderPage';

function AppRouter() {
    return (
        <Suspense fallback={<LoaderPage/>}>
            <Routes>
                {Object.values(RouteConfig).map(({ element, path }) => (
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

export default AppRouter;







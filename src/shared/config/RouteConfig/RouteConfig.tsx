import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',

};

export const RouteConfig: Array<RouteProps> = [
    {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage/>
    },
    {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage/>
    },
    {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage/>
    },
];

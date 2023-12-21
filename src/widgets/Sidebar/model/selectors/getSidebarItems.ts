import { RoutePath } from 'shared/config/RouteConfig/RouteConfig';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { SidebarItemType } from '../types/sidebar';



export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                Icon: HomeIcon,
                path: RoutePath.main,
                text: 'Главная страница'
            },
            {
                Icon: AboutIcon,
                path: RoutePath.about,
                text: 'О сайте'
            },
        ];
        if(userData){
            sidebarItemsList.push(
                {
                    Icon: ProfileIcon,
                    path: RoutePath.profile + userData?.id,
                    text: 'Profile',
                    authOnly: true,
                },
                {
                    Icon: ArticleIcon,
                    path: RoutePath.articles,
                    text: 'Articles',
                    authOnly: true,
                }
            );
        }
        return sidebarItemsList;
    }
);

import { RoutePath } from 'shared/config/RouteConfig/RouteConfig';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import ProfileIcon from 'shared/assets/icons/ProfileIcon.svg';



export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
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
    {
        Icon: ProfileIcon,
        path: RoutePath.profile,
        text: 'profile'
    }
];
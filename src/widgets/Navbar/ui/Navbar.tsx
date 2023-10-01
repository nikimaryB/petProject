import { AppRoutes, RoutePath } from 'shared/config/RouteConfig/RouteConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string,
}

export const  Navbar = ({className}: NavbarProps) => {

    const [t] = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.MAIN]}>{t('Главная страница')}</AppLink>
                <AppLink theme={AppLinkTheme.RED} to={RoutePath[AppRoutes.ABOUT]}>{t('О сайте')}</AppLink>
            </div>
        </div>
    );
};

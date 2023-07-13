import { AppRoutes, RoutePath } from "shared/config/RouteConfig/RouteConfig";
import { classNames } from "shared/lib/classNames/classNames";
import cls from  './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string,
}

export const  Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.MAIN]}>MainPage</AppLink>
        <AppLink theme={AppLinkTheme.RED} to={RoutePath[AppRoutes.ABOUT]}>AboutPage</AppLink>
      </div>
    </div>
  )
};

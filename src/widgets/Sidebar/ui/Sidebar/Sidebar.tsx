import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwither } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/RouteConfig/RouteConfig';
import HomeIcon from 'shared/assets/icons/HomeIcon.svg';
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';


interface SidebarProps {
  className?: string,
}


export const  Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);
    const [t] = useTranslation();

    const toggled = async () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div 
            data-testid='sidebar'
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            
            <Button 
                data-testid='sidebar-toggle' 
                type='button' 
                onClick={toggled}
                className={cls.collapsedBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.XL}
            // eslint-disable-next-line i18next/no-literal-string
            >{collapsed? '>' : '<'}</Button>
            <div className={cls.items}>
                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                    <HomeIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('Главная страница')}
                    </span>
                </AppLink>

                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang}/>
            </div>
        </div>
    );
};
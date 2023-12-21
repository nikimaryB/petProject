import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwither } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';

interface SidebarProps {
  className?: string,
}


export const  Sidebar = memo(({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const sidebarItemsList = useSelector(getSidebarItems);

    const toggled = async () => {
        setCollapsed(prev => !prev);
    };

    const itemList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem 
            item={item} 
            key={item.path}
            collapsed={collapsed}
        />
    )),[collapsed, sidebarItemsList]);

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
                {itemList}
            </div>
            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang}/>
            </div>
        </div>
    );
});
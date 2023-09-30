import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwither } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';


interface SidebarProps {
  className?: string,
}


export const  Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

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
            // eslint-disable-next-line i18next/no-literal-string
            >Toggle</Button>
            
            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang}/>
            </div>
        </div>
    );
};
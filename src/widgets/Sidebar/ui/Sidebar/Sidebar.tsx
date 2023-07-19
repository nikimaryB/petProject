import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwither } from 'widgets/LangSwitcher';


interface SidebarProps {
  className?: string,
}


export const  Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const toggled = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button type='button' onClick={toggled}>Toggle</button>
            <div className={cls.swithers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang}/>
            </div>
        </div>
    );
};
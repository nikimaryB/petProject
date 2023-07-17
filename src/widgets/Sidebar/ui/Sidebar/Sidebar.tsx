import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Sidebar.module.scss'
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';


interface SidebarProps {
  className?: string,
}


export const  Sidebar = ({className}: SidebarProps) => {

  const [collapsed, setCollapsed] = useState(false);

  const toggled = () => {
    setCollapsed(prev => !prev);
  }

  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={toggled}>Toggle</button>
      <div className={cls.swithers}>
        <ThemeSwitcher />
        {/* Swith lang */}
      </div>
    </div>
  )
};
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/DarkIcon.svg';
import LightIcon from 'shared/assets/icons/LightIcon.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';



interface ThemeSwitcherProps {
  className?: string,
}

export const  ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme,toggleTheme} = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])} 
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <LightIcon/> : theme === Theme.LIGHT? <DarkIcon/> : null}
        </Button>
    );
};
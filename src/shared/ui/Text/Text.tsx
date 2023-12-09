import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from  './Text.module.scss';
import { memo } from 'react';


export enum TextTheme  {
    PRYMARY = 'primary',
    ERROR = 'error'
}

export enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}
interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAlign,
    size?: TextSize, 
}

export const Text = memo(({
    className, 
    title, 
    text, 
    theme = TextTheme.PRYMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
}: TextProps) => {

    const mods: Mods = {
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
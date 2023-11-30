import { classNames } from 'shared/lib/classNames/classNames';
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
interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme,
    align?: TextAlign, 
}

export const Text = memo(({
    className, 
    title, 
    text, 
    theme = TextTheme.PRYMARY,
    align = TextAlign.LEFT,
}: TextProps) => {

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
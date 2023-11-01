import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Text.module.scss';


export enum TextTheme  {
    PRYMARY = 'primary',
    ERROR = 'error'
}

interface TextProps {
    className?: string,
    title?: string,
    text?: string,
    theme?: TextTheme 
}

export const Text = ({className, title, text, theme = TextTheme.PRYMARY}: TextProps) => {

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
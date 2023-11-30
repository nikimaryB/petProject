import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from  './Avatar.module.scss';
import { CSSProperties } from 'react';


interface AvatarProps {
    className?: string,
    src?: string,
    size?: number,
    alt?: string,
}

export const Avatar = ({className, src, size, alt}: AvatarProps) => {
    const mods: Mods = {};
    
    const styles: CSSProperties = {
        width: size || 100,
        height: size || 100,
    };

    
    return (
        <img 
            alt={alt}
            src={src} 
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}>
        </img>
    );
};
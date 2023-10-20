import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Modal.module.scss';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean,
}

const ANIMATION_DELAY: number = 300;

export const Modal = (props: ModalProps) => {

    const {
        children,
        className,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMountes] = useState(false);
    const { theme } = useTheme();

    const timeRef = useRef<ReturnType <typeof setTimeout>>();

    useEffect(()=>{
        if(isOpen) setIsMountes(true);
    },[isOpen]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if(onClose){
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                setIsClosing(false);
                onClose();
            }, ANIMATION_DELAY);
        }
        return;
    },[onClose]);

    //new refs
    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape'){
            closeHandler();
        }
    },[closeHandler]);

    useEffect(()=>{
        if(isOpen){
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    },[isOpen, onKeyDown]);

    const contentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    if(lazy && !isMounted){
        return null;
    }
    return (
        <Portal >
            <div className={classNames(cls.Modal, { ...mods }, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={classNames(cls.content, {}, [])} onClick={contentClick}>
                        {children}
                    </div>
                </div>    
            </div>
        </Portal>
    );
};
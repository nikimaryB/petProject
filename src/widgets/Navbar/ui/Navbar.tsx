import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Navbar.module.scss';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';

interface NavbarProps {
  className?: string,
}

export const  Navbar = ({className}: NavbarProps) => {

    const [isAuthOpen, setAuthOpen] = useState(false);

    const {t} = useTranslation();

    const onClose =useCallback( () => {
        setAuthOpen(false);
    },[]);

    const onOpen =useCallback( () => {
        setAuthOpen(true);
    },[]);


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpen} className={cls.links} >{t('voiti')}</Button>
            <LoginModal onClose={onClose} isOpen={isAuthOpen} />
        </div>
    );
};

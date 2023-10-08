import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Navbar.module.scss';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string,
}

export const  Navbar = ({className}: NavbarProps) => {

    const [isAuthOpen, setAuthOpen] = useState(false);

    const {t} = useTranslation();

    const onToggleModal =useCallback( () => {
        setAuthOpen((prev)=> !prev);
    },[]);


    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal} className={cls.links} >{t('voiti')}</Button>
            <Modal isOpen={isAuthOpen} onClose={onToggleModal}>aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa 
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa </Modal>
        </div>
    );
};

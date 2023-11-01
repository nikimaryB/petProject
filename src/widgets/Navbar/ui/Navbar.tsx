import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './Navbar.module.scss';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import { Text } from 'shared/ui/Text/Text';
import { userAction } from 'entities/User';

interface NavbarProps {
  className?: string,
}

export const  Navbar = ({className}: NavbarProps) => {

    const [isAuthOpen, setAuthOpen] = useState(false);
    const dispatch = useDispatch();

    const {t} = useTranslation();

    const onClose =useCallback( () => {
        setAuthOpen(false);
    },[]);

    const onOpen =useCallback( () => {
        setAuthOpen(true);
    },[]);

    const onLogOut = useCallback( () => {
        dispatch(userAction.logout());
    }, [dispatch]);

    const user = useSelector(getUserAuthData);

    if(user) {
        return(
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Text title={user?.username}/>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onLogOut} className={cls.links} >{t('logOut')}</Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onOpen} className={cls.links} >{t('voiti')}</Button>
            {isAuthOpen && <LoginModal onClose={onClose} isOpen={isAuthOpen}/> }
        </div>
    );
};

import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';


interface LoginFormProps {
    className?: string,
}

export const LoginForm = memo( ({className}: LoginFormProps) => {
    const [t] = useTranslation();
    const dispatch = useDispatch();
    const {username, password, isLoading, error} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginAction.setUsername(value));
    },[dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginAction.setPassword(value));
    },[dispatch]);

    const onLoginClick = useCallback( () => {
        dispatch(loginByUsername({username, password}));
    },[dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Auth Form')}/>
            {error && <Text text={t(error)} theme={TextTheme.ERROR} />}
            <Input 
                value={username}
                autofocus
                type='text' 
                className={cls.input}
                placeholder={t('username')}
                onChange={onChangeUsername}
            />
            <Input 
                value={password}
                type='text' 
                className={cls.input}
                placeholder={t('password')}
                onChange={onChangePassword}
            />
            <Button 
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ButtonTheme.OUTLINE} 
                className={cls.loginBtn}
            >{t('voiti')}</Button>
        </div>
    );
});
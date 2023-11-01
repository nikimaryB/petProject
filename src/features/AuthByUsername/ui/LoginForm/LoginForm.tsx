import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, loginReducer } from '../../model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { DinamicModuleLoader, ReducersList } from 'shared/lib/components/AsyncLoadModules/DinamicModuleLoader';


interface LoginFormProps {
    className?: string,
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo( ({className}: LoginFormProps) => {
    const [t] = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);


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
        <DinamicModuleLoader
            reducers={initialReducers}
        >
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
        </DinamicModuleLoader>

    );
});

export default LoginForm;
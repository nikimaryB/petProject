import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './ErrorComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';


interface ErrorComponentProps {
    className?: string,
}

export const ErrorComponent = ({className}: ErrorComponentProps) => {
    const [t] = useTranslation();

    const refresh = () => {
        location.reload();
    };
    
    return (
        <div className={classNames(cls.ErrorComponent, {}, [className])}>
            <p>
                {t('something-went-wrong-please-reload-the-page')}
            </p>
            <Button onClick={refresh}>{t('refresh')}</Button>
        </div>
    );
};
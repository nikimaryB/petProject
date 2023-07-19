import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './LangSwither.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';


interface LangSwitherProps {
    className?: string,
}


export const  LangSwither = ({className}: LangSwitherProps) => {
    const [t, i18n] = useTranslation();
  
    const swithLang = () => {
        i18n.changeLanguage(i18n.language==='ru' ? 'en' : 'ru');
    };

    return (
        <Button className={classNames(cls.LangSwither, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={swithLang}
        >
            {t('Язык')}
        </Button>
    );
};
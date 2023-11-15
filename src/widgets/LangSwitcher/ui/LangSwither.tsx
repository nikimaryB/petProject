import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';


interface LangSwitherProps {
    className?: string,
}


export const  LangSwither = memo(({className}: LangSwitherProps) => {
    const [t, i18n] = useTranslation();
  
    const swithLang = () => {
        i18n.changeLanguage(i18n.language==='ru' ? 'en' : 'ru');
    };

    return (
        <Button className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={swithLang}
        >
            {t('Язык')}
        </Button>
    );
});
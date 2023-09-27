import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export const ButtonError = () => {
    // For testing Error Boudary only
    const [t] = useTranslation();
    const [error, setError] = useState<boolean>(false);

    const showError = () => {
        setError(true);
    };

    useEffect(()=>{
        if(error) throw new Error();
    },[error]);

    return (
        <Button type='button' onClick={showError}>
            {t('vklyuchit-oshibku')}
        </Button>
    );
};
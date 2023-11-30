import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';


interface CountrySelectProps {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void,
    readonly?: boolean,
}

const options= [
    {value: Country.Armenia, content: Country.Armenia},
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Kazahstan, content: Country.Kazahstan},
    {value: Country.Ukraine, content: Country.Ukraine},
];

export const CountrySelect = memo(({ className, value, onChange, readonly}: CountrySelectProps) => {
    const {t} = useTranslation('profile');

    const onChangeHandler = useCallback((value)=>{
        onChange?.(value as Country);
    },[onChange]);

    return (
        <Select
            className={classNames('', {}, [className])} 
            label={t('Country')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
});
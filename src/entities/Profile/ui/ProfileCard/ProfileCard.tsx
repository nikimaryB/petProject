import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from  './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
interface ProfileCardProps {
    className?: string,
    data?: Profile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeCurrency?: (currency?: Currency) => void;
    onChangeCountry?: (country?: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    const {t} = useTranslation('profile');
    
    if(isLoading) {
        return(
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader/>
            </div>
        );
    }

    if(error){
        return(
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text 
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            <div className={cls.data}>
                {data?.avatar && <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={data.avatar}/>
                </div>}
                <Input 
                    value={data?.first || ''}
                    placeholder={t('name')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                ></Input>
                <Input 
                    value={data?.lastname || ''}
                    placeholder={t('lastname')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                ></Input>
                <Input 
                    value={data?.age}
                    placeholder={t('Age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                ></Input>
                <Input 
                    value={data?.city}
                    placeholder={t('City')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                ></Input>
                <Input 
                    value={data?.username}
                    placeholder={t('Username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                ></Input>
                <Input 
                    value={data?.avatar}
                    placeholder={t('Avatar')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                ></Input>
                <CountrySelect
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
                <CurrencySelect 
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
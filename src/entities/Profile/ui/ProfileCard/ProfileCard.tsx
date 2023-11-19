import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
// import { getProfileIsLoading } from '../../model/selectors/getProfileFirstname/getProfileLIsLoading/getProfileIsLoading';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';


interface ProfileCardProps {
    className?: string,
}

export const ProfileCard = ({className}: ProfileCardProps) => {
    const [t] = useTranslation('profile');
    const data = useSelector(getProfileData);
    // const isLoading = useSelector(getProfileIsLoading);
    // const error = useSelector(getProfileError);


    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Profile')}/>
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div className={cls.data}>
                <Input 
                    value={data?.first || ''}
                    placeholder={t('name')}
                    className={cls.input}
                ></Input>
                <Input
                    value={data?.lastname || ''}
                    placeholder={t('lastname')}
                    className={cls.input}
                ></Input>
            </div>
        </div>
    );
};
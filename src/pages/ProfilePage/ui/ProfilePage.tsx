import { ProfileCard, ValidateProfileError, fetchProfileData, getProfileError, getProfileForm, getProfileIsLoading, getProfileReadonly, getProfileValidateErrors, profileAction, profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DinamicModuleLoader, ReducersList } from 'shared/lib/components/AsyncLoadModules/DinamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
  
const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({className}: ProfilePageProps) => {
    const [t] = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    
    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server Error'),
        [ValidateProfileError.INCORRECT_AGE]: t('Age Error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Country Error'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('First or Lastname Error'),
        [ValidateProfileError.NO_DATA]: t('No Data Error'),
    };


    useEffect(() => {
        dispatch(fetchProfileData());
    },[dispatch]);

    const onChangeFirstname = useCallback((value?: string)=>{
        dispatch(profileAction.updateProfile({first: value || ''}));
    },[dispatch]);

    const onChangeLastname = useCallback((value?: string)=>{
        dispatch(profileAction.updateProfile({lastname: value || ''}));
    },[dispatch]);

    const onChangeAge = useCallback((value?: string)=>{
        const digitsOnly = value?.replace(/\D/g, '');
        dispatch(profileAction.updateProfile({age: Number(digitsOnly || 0) }));
    },[dispatch]);

    const onChangeCity = useCallback((value?: string)=>{
        dispatch(profileAction.updateProfile({city: value || ''}));
    },[dispatch]);

    const onChangeAvatar = useCallback((value?: string)=>{
        dispatch(profileAction.updateProfile({avatar: value || ''}));
    },[dispatch]);

    const onChangeUsername = useCallback((value?: string)=>{
        dispatch(profileAction.updateProfile({username: value || ''}));
    },[dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency)=>{
        dispatch(profileAction.updateProfile({currency }));
    },[dispatch]);

    const onChangeCountry = useCallback((country?: Country)=>{
        dispatch(profileAction.updateProfile({country }));
    },[dispatch]);

    return (
        <DinamicModuleLoader reducers={reducers} removeAfterUnmount>

            <div className={classNames('cls.ProfilePage', {}, [className])}>
                <ProfilePageHeader/>
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text key={err} theme={TextTheme.ERROR} text={validateErrorTranslates[err]}/>
                ) )}
                <ProfileCard 
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeAvatar={onChangeAvatar}
                    onChangeUsername={onChangeUsername}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        
        </DinamicModuleLoader>
    );
};

export default ProfilePage;
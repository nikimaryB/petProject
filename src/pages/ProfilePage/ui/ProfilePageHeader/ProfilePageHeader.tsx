import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileAction, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';


interface ProfilePageHeaderProps {
    className?: string,
}

export const ProfilePageHeader = ({className}: ProfilePageHeaderProps) => {
    const [t] = useTranslation('profile');

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    console.log(authData?.id , profileData?.id);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(()=>{
        dispatch(profileAction.setReadonly(false));
    },[dispatch]);  

    const onCancelEdit = useCallback(()=>{
        dispatch(profileAction.cancelEdit());
    },[dispatch]);  

    const onSave = useCallback(()=>{
        dispatch(updateProfileData());
    },[dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
            <Text title={t('Profile')}/>
            {canEdit && 
                <div className={cls.btnsWrapper}>
                    {readonly? <Button 
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >{t('Edit')}</Button>
                        : <div className={cls.editBtn}>
                            <Button 
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                            >{t('Save')}</Button>
                            <Button 
                                className={cls.editBtn}
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >{t('Cancel')}</Button>
                        </div>
                    }
                </div>
            }
        </div>
    );
};
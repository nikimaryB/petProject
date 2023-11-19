import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DinamicModuleLoader, ReducersList } from 'shared/lib/components/AsyncLoadModules/DinamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
// import cls from  './ProfilePage.module.scss';
// import { useTranslation } from 'react-i18next';
  
const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = ({className}: ProfilePageProps) => {
    // const [t] = useTranslation();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchProfileData());
    },[dispatch]);

    return (
        <DinamicModuleLoader reducers={reducers} removeAfterUnmount>

            <div className={classNames('cls.ProfilePage', {}, [className])}>
                <ProfileCard/>
            </div>
        
        </DinamicModuleLoader>
    );
};

export default ProfilePage;
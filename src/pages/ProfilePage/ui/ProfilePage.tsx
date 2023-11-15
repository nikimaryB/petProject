import { profileReducer } from 'entities/Profile';
import { classNames } from 'shared/lib/classNames/classNames';
import { DinamicModuleLoader, ReducersList } from 'shared/lib/components/AsyncLoadModules/DinamicModuleLoader';
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

    return (
        <DinamicModuleLoader reducers={reducers} removeAfterUnmount>

            <div className={classNames('cls.ProfilePage', {}, [className])}>
                ProfilePage///// 26.23
            </div>
        
        </DinamicModuleLoader>
    );
};

export default ProfilePage;
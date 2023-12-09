import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import { DinamicModuleLoader, ReducersList } from 'shared/lib/components/AsyncLoadModules/DinamicModuleLoader';
import { articleDetailsReducer } from './../../model/slice/articleDetailsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetails';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye 20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar 20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';


interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({className, id}: ArticleDetailsProps) => {
    const [t] = useTranslation();
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch(block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent className={cls.block} block={block} key={block.id}/>;
        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent className={cls.block} block={block} key={block.id}/>;    
        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent className={cls.block} block={block} key={block.id}/>;
        default:
            return null;    
        }
    }, []);

    useEffect( () => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if(isLoading){
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'}/>
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
                <Skeleton className={cls.skeleton} width={'100%'} height={200} />
 
            </>
        );
    } else if(error){
        content = (
            <Text 
                theme={TextTheme.ERROR} 
                text={error} title={t('article loading error')}
                align={TextAlign.CENTER}
            />
        );
    } else {
        content = ( 
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar 
                        size={200} 
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>

                <Text 
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />

                <div className={cls.articleInfo}>
                    <Icon className={cls.logo} Svg={EyeIcon}/>
                    <Text text={String(article?.views)}/>
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.logo} Svg={CalendarIcon}/>
                    <Text text={String(article?.createdAt)}/>
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }
    return (
        <DinamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content} 
            </div>
        </DinamicModuleLoader>
    );
});
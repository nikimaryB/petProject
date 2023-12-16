import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DinamicModuleLoader, ReducersList } from 'shared/lib/components/AsyncLoadModules/DinamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchCommentsArticleById } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';


interface ArticleDetailsPageProps {
    className?: string,
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const [t] = useTranslation('article-details');
    const { id } = useParams();
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleDetailsCommentsIsLoading);
    // const error = useSelector(getArticleDetailsCommentsError);

    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsArticleById(id));    
    });

    if(!id){
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья на найдена')}
            </div>
        );
    }

    return (
        <DinamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Comments')}/>
                <CommentList isLoading={isLoading} comments={comments}/>
            </div>
        </DinamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
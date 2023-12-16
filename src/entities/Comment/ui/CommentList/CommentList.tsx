import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;

}

export const CommentList = ({className, comments, isLoading}: CommentListProps) => {
    const [t] = useTranslation('');

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {!comments?.length ?
                <Text text={t('Comments not found')}/>:
                comments?.map((comment)=>(
                    <CommentCard isLoading={isLoading} className={cls.comment}  key={comment.id} comment={comment}/>
                ))            
            }
        </div>
    );
};
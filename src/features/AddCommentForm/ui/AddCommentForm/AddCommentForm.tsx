import { classNames } from 'shared/lib/classNames/classNames';
import cls from  './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormAction, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';
import { DinamicModuleLoader, ReducersList } from 'shared/lib/components/AsyncLoadModules/DinamicModuleLoader';
import { Text } from 'shared/ui/Text/Text';


export interface AddCommentFormProps {
    className?: string,
    onSendComment: (text: string) => void,
}

const reducers: ReducersList ={
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({className, onSendComment}: AddCommentFormProps) => {
    const [t] = useTranslation();

    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const dispach = useAppDispatch();

    const onCommentChange = useCallback( (value: string) => {
        dispach(addCommentFormAction.setText(value));
    }, [dispach]);

    const onSendHandler = useCallback( ()=> {
        onSendComment(text || '');
        onCommentChange('');
    },[onSendComment, text, onCommentChange]);

    if(error){ 
        return (
            <Text text={error}/>
        );
    }


    return (
        <DinamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input} 
                    value={text} 
                    placeholder={t('Введите текст комментария')}
                    onChange={onCommentChange}
                />
                <Button onClick={onSendHandler}>{t('Отправить комментарий')}</Button>
            </div>
        </DinamicModuleLoader>
    );
};

export default memo(AddCommentForm);
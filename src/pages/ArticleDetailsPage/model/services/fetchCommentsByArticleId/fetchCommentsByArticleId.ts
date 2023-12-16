import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Comment } from 'entities/Comment';

export const fetchCommentsArticleById = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string> >(
    'article/fetchCommentsArticleById',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        if(!articleId) return rejectWithValue('error id');

        try{
            //Необходимо заново дергать локалсторадж, так как он при иниациализации без юзера пустой в инстансе апи
            const config = {
                params: {
                    articleId,
                    _expand: 'user',
                },
                headers: {
                    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
                }};

            const response = await extra.api.get<Comment[]>('/comments', config);

            if(!response.data) {
                throw new Error();
            }
            return response.data;
        }catch(e){
            return rejectWithValue('Auth Error');
        }
    }
);





import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Article } from '../types/article';


export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string> >(
    'article/fetchArticleById',
    async (articleId, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try{
            //Необходимо заново дергать локалсторадж, так как он при иниациализации без юзера пустой в инстансе апи
            const config = {
                headers: {
                    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
                }};

            const response = await extra.api.get<Article>('/articles/'+ articleId, config);

            if(!response.data) {
                throw new Error();
            }
            return response.data;
        }catch(e){
            return rejectWithValue('Auth Error');
        }
    }
);





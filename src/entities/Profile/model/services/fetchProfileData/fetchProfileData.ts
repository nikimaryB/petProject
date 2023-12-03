import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';


export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string> >(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;
        try{
            //Необходимо заного дергать локалсторадж, так как он при иниациализации без юзера пустой в инстансе апи
            const config = {
                headers: {
                    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
                }};

            const response = await extra.api.get<Profile>('/profile', config);

            if(!response.data) {
                throw new Error();
            }
            return response.data;
        }catch(e){
            return rejectWithValue('Auth Error');
        }
    }
);





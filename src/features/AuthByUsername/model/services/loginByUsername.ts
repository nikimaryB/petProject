import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';


type LoginbyUsernameProps = {
    username: string,
    password: string,
}

export const loginByUsername = createAsyncThunk<User, LoginbyUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, {rejectWithValue}) => {
        try{
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if(!response.data){
                throw new Error;
            }

            return response.data;
        }catch(e){
            return rejectWithValue('eeerrorr');
        }
    }
);







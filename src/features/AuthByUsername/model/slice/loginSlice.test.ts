import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginAction, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice',() => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = {username: '123'};
        expect(loginReducer(
            state as LoginSchema,
            loginAction.setUsername('111')
        )).toEqual({username: '111'});
    });

    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = {password: '123'};
        expect(loginReducer(
            state as LoginSchema,
            loginAction.setPassword('111')
        )).toEqual({password: '111'});
    });

    test('loading', () => {
        const state: DeepPartial<LoginSchema> = {};
        
        const action = {type: loginByUsername.pending};
         

        expect(loginReducer(
            state as LoginSchema,
            action
        )).toEqual({isLoading: true});
    });
});
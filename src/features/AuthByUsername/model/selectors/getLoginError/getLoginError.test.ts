import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from './getLoginError';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getLoginError', () => {
    test('with state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'errorTest'
            }
        };
        expect(getLoginError(state as StateSchema)).toBe('errorTest');
    });

    test('without state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toBe(undefined);
    });
});
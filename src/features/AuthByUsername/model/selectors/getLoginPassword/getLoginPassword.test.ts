import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginError', () => {
    test('with state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123'
            }
        };
        expect(getLoginPassword(state as StateSchema)).toBe('123');
    });

    test('without state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
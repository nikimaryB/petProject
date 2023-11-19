import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginError', () => {
    test('with state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123'
            }
        };
        expect(getLoginUsername(state as StateSchema)).toBe('123');
    });

    test('without state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
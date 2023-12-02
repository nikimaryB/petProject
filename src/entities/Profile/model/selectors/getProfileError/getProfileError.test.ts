import { getProfileError } from './getProfileError';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileError', () => {
    test('with state', () => {
      
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123'
            }
        };
        expect(getProfileError(state as StateSchema)).toBe('123');
    });

    test('without state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBe(undefined);
    });
});
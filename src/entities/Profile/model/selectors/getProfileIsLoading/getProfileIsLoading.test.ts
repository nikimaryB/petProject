import { getProfileIsLoading } from './getProfileIsLoading';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileIsLoading', () => {
    test('with state', () => {
      
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        };
        expect(getProfileIsLoading(state as StateSchema)).toBeTruthy();
    });

    test('without state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toBe(undefined);
    });
});
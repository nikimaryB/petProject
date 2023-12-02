import { getProfileFirstname } from './getProfileFirstname';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileFirstname', () => {
    test('with state', () => {
      
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {first: 'test'}
            }
        };
        expect(getProfileFirstname(state as StateSchema)).toBe('test');
    });

    test('without state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstname(state as StateSchema)).toBe('');
    });
});
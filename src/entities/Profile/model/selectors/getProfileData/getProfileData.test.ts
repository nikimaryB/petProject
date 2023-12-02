import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';
import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';

describe('getProfileData', () => {
    test('with state', () => {
        const data = {
            username: 'admin',
            age: 28,
            country: Country.Russia,
            lastname: 'Bor',
            first: 'asd',
            city: 'asdas',
            currency: Currency.EUR,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                data
            }
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });

    test('without state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
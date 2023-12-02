import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';
import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';

describe('getProfileForm', () => {
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
                form: data,
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('without state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
import { Country } from 'entities/Country';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileReducer, profileAction } from './profileSlice';
import { Currency } from 'entities/Currency';


const data = {
    username: 'admin',
    age: 28,
    country: Country.Russia,
    lastname: 'Bor',
    first: 'asd',
    city: 'asdas',
    currency: Currency.EUR,
};


describe('profileSlice',() => {
    test('setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};
        expect(profileReducer(
            state as ProfileSchema,
            profileAction.setReadonly(true)
        )).toEqual({readonly: true});
    });

    test('cancelEdit', () => {
        const data = {
            first: 'test'
        };

        const state: DeepPartial<ProfileSchema> = {data};
        expect(profileReducer(
            state as ProfileSchema,
            profileAction.cancelEdit()
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: state.data
        });
    });

    test('updateProfile', () => {
        const data = {
            first: 'test'
        };

        const state: DeepPartial<ProfileSchema> = {form: data};
        expect(profileReducer(
            state as ProfileSchema,
            profileAction.updateProfile({first: 'aaa', age: 12})
        )).toEqual({
            form: { first: 'aaa', age: 12}
        });
    });

    test('updateProfileData.pending', () => {

        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR]
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });


    test('updateProfileData.fulfilled', () => {

        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            data: data,
            form: data,
            readonly: true,
            validateErrors: undefined,
            error: undefined,
        });
    });
});
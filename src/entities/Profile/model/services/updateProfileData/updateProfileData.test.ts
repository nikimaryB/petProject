import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';


const data = {
    username: 'admin',
    age: 28,
    country: Country.Russia,
    lastname: 'Bor',
    first: 'asd',
    city: 'asdas',
    currency: Currency.EUR,
    id: '1'
};

describe('updateProfileData', () => {
   
    test('success', async () => {
        
        const thunk = new TestAsyncThunk(updateProfileData, { profile: {form: data}});
        thunk.api.put.mockResolvedValue(Promise.resolve({ data: data}));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error server', async () => {
        
        const thunk = new TestAsyncThunk(updateProfileData, { profile: {form: data}});
        thunk.api.put.mockResolvedValue(Promise.resolve({ status: '504'}));
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);

    });

    test('error validation', async () => {
        
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {}});
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.NO_DATA,
        ]);

    });
});
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
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

describe('fetchProfileData', () => {
   
    test('success', async () => {
        
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockResolvedValue(Promise.resolve({ data: data}));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockResolvedValue(Promise.resolve({ status: '504'}));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');

    });
});
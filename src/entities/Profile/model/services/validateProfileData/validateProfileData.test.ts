import { Country } from 'entities/Country';
import { validateProfileData } from './validateProfileData';
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
};

describe('validateProfileData', () => {
   
    test('success', async () => {
        
        const result = validateProfileData(data);
        expect(result).toEqual([]);

    });

    test('without firs and last', async () => {
              
        const result = validateProfileData({...data, lastname: ''});
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without age', async () => { 
              
        const result = validateProfileData({...data, age: 0});
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('without country', async () => {
              
        const result = validateProfileData({...data, country: undefined});
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('empty data', async () => {
              
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('without data', async () => {
              
        const result = validateProfileData();
        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });
});
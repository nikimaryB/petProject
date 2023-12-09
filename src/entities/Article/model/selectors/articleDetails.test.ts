import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from './articleDetails';

describe('getArticleDetails', () => {
    describe('getArticleDetailsData', () => {
        test('with state', () => {
            
            const data ={
                id: '1',
                title: 'subtitle'
            };
    
            const state: DeepPartial<StateSchema> = {
                articleDetails: {
                    data,
                }
            };
            expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
        });
    
        test('without state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
        });
    });


    describe('getArticleDetailsIsLoading', () => {
        test('with state', () => {
            const state: DeepPartial<StateSchema> = {
                articleDetails: {
                    isLoading: true
                }
            };
            expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
        });
    
        test('without state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(undefined);
        });
    });

    describe('getArticleDetailsError', () => {
        test('with state', () => {
            
            const state: DeepPartial<StateSchema> = {
                articleDetails: {
                    error: 'adssad',
                }
            };
            expect(getArticleDetailsError(state as StateSchema)).toBe('adssad');
        });
    
        test('without state', () => {
            const state: DeepPartial<StateSchema> = {};
            expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
        });
    });

});
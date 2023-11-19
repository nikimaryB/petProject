import { loginByUsername } from './loginByUsername';
import { userAction } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';




describe('loginByUsername', () => {
    
    // const userValue = { id: '1', username: 'test'};

    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    // beforeEach(() => {
    //     getState = jest.fn();
    //     dispatch = jest.fn();
    // });

    // test('login', async () => {
    //     mockAxios.post.mockResolvedValue(Promise.resolve({ data:userValue}));
    
    //     const action = loginByUsername({ username:'test', password: '123'});
    //     const result = await action(dispatch, getState, undefined );

    //     expect(mockAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue));
    //     expect(result.payload).toEqual(userValue);
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    // });

    // test('error', async () => {
    //     mockAxios.post.mockResolvedValue(Promise.resolve({ status: '504'}));

    //     const action = loginByUsername({ username:'test', password: '123'});
    //     const result = await action(dispatch, getState, undefined );
        
    //     expect(mockAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toEqual('Auth Error');
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    // });
   
   
    test('login', async () => {
        const userValue = { id: '1', username: 'test'};
        
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockResolvedValue(Promise.resolve({ data: userValue}));
        const result = await thunk.callThunk({ username:'test', password: '123'});

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue));
        expect(result.payload).toEqual(userValue);
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    });

    test('error', async () => {
        
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockResolvedValue(Promise.resolve({ status: '504'}));
        const result = await thunk.callThunk({ username:'test', password: '123'});
        
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('Auth Error');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    });
});
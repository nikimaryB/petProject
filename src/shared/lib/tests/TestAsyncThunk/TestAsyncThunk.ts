/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosStatic } from 'axios';

type AsyncThunkType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

jest.mock('axios');
const mockAxios = jest.mocked(axios);

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;
    getState: () => StateSchema;
    actionCreator: AsyncThunkType<Return, Arg, RejectedValue>;

    api: jest.MockedFunctionDeep<AxiosStatic>;
    navigate: jest.MockedFn<any>;

    constructor(actionCreator: AsyncThunkType<Return, Arg, RejectedValue>){
        this.getState = jest.fn();
        this.dispatch = jest.fn();
        this.actionCreator = actionCreator;
        this.api = mockAxios;
        this.navigate = jest.fn();
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch, 
            this.getState,
            { api: this.api, navigate: this.navigate}
        );
        return result;
    }
}


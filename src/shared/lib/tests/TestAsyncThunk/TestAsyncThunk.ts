import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type AsyncThunkType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: Dispatch;
    getState: () => StateSchema;
    actionCreator: AsyncThunkType<Return, Arg, RejectedValue>;

    constructor(actionCreator: AsyncThunkType<Return, Arg, RejectedValue>){
        this.getState = jest.fn();
        this.dispatch = jest.fn();
        this.actionCreator = actionCreator;
    }

    async callThunk (arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined );
        return result;
    }
}


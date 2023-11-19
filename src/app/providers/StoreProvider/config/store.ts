import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reduceManager';
import { $api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';

export function createReduxStore (
    initialstate?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {

    
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);
    
    const extraArg: ThunkExtraArg= {
        api: $api,
        navigate,
    };


    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialstate,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk:  {
                extraArgument: extraArg,
            }
        })
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;

}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWhithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
};

interface DinamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DinamicModuleLoader: FC<DinamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWhithManager;


    useEffect( () => {

        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add( name as StateSchemaKey, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });

        return () => {
            if(removeAfterUnmount){
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);



    return (
        <>
            {children}
        </>
    );
};
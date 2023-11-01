import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWhithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
};

type ReducerListEntry = [StateSchemaKey, Reducer];

interface DinamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DinamicModuleLoader: FC<DinamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWhithManager;


    useEffect( () => {

        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add( name, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });

        return () => {
            if(removeAfterUnmount){
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove(name);
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
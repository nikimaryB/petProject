
import { counterReducer, counterAction } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';



describe('counterSlice', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterAction.decrement())).toEqual({value: 9});
    });
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterAction.increment())).toEqual({value: 11});
    });

    test('undefined state with initial state', () => {
        expect(counterReducer(undefined, counterAction.increment())).toEqual({value: 1});
    });
});
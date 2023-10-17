import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterAction } from '../model/slices/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';


export const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterAction.increment());
    };

    const decrement = () => {
        dispatch(counterAction.decrement());
    };

    return (
        <div>
            <h1 data-testid='value-title'>{counter}</h1>
            <Button data-testid='increment-btn' onClick={increment}>+</Button>
            <Button data-testid='decrement-btn' onClick={decrement}>-</Button>
        </div>
    );
};

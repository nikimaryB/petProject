import {render, screen} from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Test Button component', () => {
    test('Test render', () => {
        render(<Button> test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('Test with theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}> test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    });
});
import {render, screen} from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Test Button component', () => {
    test('Test render', () => {
        render(<Button> test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    test('Test with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}> test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
        screen.debug();
    });
});
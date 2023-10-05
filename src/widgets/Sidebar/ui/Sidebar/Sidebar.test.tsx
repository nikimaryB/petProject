/* eslint-disable i18next/no-literal-string */
import {screen} from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Test Sidebar component', () => {
    test('Test render', () => {
        componentRender(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Test toggle', () => {
        componentRender(<Sidebar/>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        
        toggleBtn.click();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
import { CurrentWeather } from '@/feature/weather/component';
import { render, screen } from '@testing-library/react';

describe('CurrentWeather component', () => {
    it('render loading skeleton', () => {
        const { container } = render(<CurrentWeather />);
        const heading = screen.getByRole('heading', {
            level: 4,
            name: 'Current weather',
        });
        const divider = screen.getByRole('separator', {
            name: '',
        });

        expect(heading).toBeInTheDocument();
        expect(divider).toBeInTheDocument();
        expect(container.getElementsByClassName('ant-skeleton image').length).toBe(1);
    });
});

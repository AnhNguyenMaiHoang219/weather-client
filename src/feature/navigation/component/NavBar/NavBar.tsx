import { TempUnitToggle } from '@/feature/weather/component';

export const NavBar = () => {
    return (
        <div className="nav-bar">
            <h1>Weather</h1>
            <TempUnitToggle />
        </div>
    );
};

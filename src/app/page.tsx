import { NavBar } from '@/feature/navigation/component';
import { CurrentWeather, HourlyChart, WeeklyTable } from '@/feature/weather/component';
import styles from './page.module.scss';

export default function Home() {
    return (
        <div className="container">
            <NavBar />
            <div className={styles.main}>
                <div className="side-bar">
                    <CurrentWeather />
                </div>
                <div className="main-view">
                    <div className="hour-chart-container">
                        <WeeklyTable />
                    </div>
                    <div className="hour-chart-container">
                        <HourlyChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

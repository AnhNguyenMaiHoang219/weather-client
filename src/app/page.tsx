import { NavBar } from '@/feature/navigation/component';
import { HourlyChart, WeeklyTable } from '@/feature/weather/component';
import styles from './page.module.css';

export default function Home() {
    return (
        <div className="container">
            <NavBar />
            <div className={styles.main}>
                <div className="side-bar">
                    <h1>Today</h1>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="" />
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

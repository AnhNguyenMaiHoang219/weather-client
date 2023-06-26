import { CurrentWeather, HourlyChart, WeeklyTable } from '@/feature/weather/component';
import styles from './page.module.scss';

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.sideBar}>
                <CurrentWeather />
            </div>
            <div className={styles.main}>
                <div className={styles.weeklyDataContainer}>
                    <WeeklyTable />
                </div>
                <div className={styles.hourlyDataContainer}>
                    <HourlyChart />
                </div>
            </div>
        </div>
    );
}

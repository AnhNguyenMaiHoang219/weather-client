import { RefreshButton, TempUnitToggle } from '@/feature/weather/component';
import Image from 'next/image';
import styles from './nav-bar.module.scss';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image
                    className={styles.logo}
                    src="/image/logo.svg"
                    alt="Logo"
                    width={256}
                    height={256}
                />
                <h1 className={styles.logoName}>Weather</h1>
            </div>
            <div>
                <RefreshButton className={styles.refreshButton} />
                <TempUnitToggle />
            </div>
        </div>
    );
};

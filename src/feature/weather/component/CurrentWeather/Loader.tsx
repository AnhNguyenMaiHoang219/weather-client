import { Divider, Skeleton, Typography } from 'antd';
import styles from './current-weather.module.scss';

const { Title } = Typography;

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <Title level={4}>Current weather</Title>
            <Skeleton.Image className={styles.image} active />
            <Skeleton.Input className={styles.temperature} size="large" active />
            <Skeleton.Input size="small" active />
            <Skeleton.Button className={styles.description} size="small" active />
            <Divider />
            <Skeleton paragraph={{ rows: 0 }} active />
        </div>
    );
};

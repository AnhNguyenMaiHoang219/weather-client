import variable from '@/feature/common/style/variable.module.scss';
import { AreaConfig } from '@ant-design/charts';

const DEFAULT_CHART_CONFIG: Omit<AreaConfig, 'data'> = {
    smooth: true,
    height: 300,
    areaStyle: () => {
        return {
            fill: `l(270) 0:#ffffff 0.5:${variable.primaryColor50} 1:${variable.primaryColor}`,
        };
    },
};

export { DEFAULT_CHART_CONFIG };

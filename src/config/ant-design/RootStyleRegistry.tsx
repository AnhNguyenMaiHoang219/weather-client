'use client';

import variable from '@/feature/common/style/variable.module.scss';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';
import { useState, type PropsWithChildren } from 'react';
import { DEFAULT_FONT } from '../typography';
import theme from './theme.json';

export const RootStyleRegistry = ({ children }: PropsWithChildren) => {
    const [cache] = useState(() => createCache());

    useServerInsertedHTML(() => {
        return <style dangerouslySetInnerHTML={{ __html: extractStyle(cache) }} />;
    });

    const themeConfig = {
        ...theme,
        token: {
            ...theme.token,
            colorPrimary: variable.primaryColor,
            fontFamily: DEFAULT_FONT.style.fontFamily,
        },
    };

    return (
        <StyleProvider cache={cache}>
            <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
        </StyleProvider>
    );
};

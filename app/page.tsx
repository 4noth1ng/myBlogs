'use client';

import { Button, ConfigProvider, Input, theme } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ThemeContext } from '../store/themeContext';

export default function Home() {
  const [themeColor, setThemeColor] = useState('light');
  const updateThemeColor = (newValue: string) => setThemeColor(newValue);
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      console.log(e);

      if (e.key === 'theme') {
        setThemeColor(e.newValue as string);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  return (
    <ThemeContext.Provider value={{ themeColor, updateThemeColor }}>
      <ConfigProvider
        theme={
          themeColor === 'light'
            ? {}
            : {
                // 1. 单独使用暗色算法
                algorithm: theme.darkAlgorithm,
                // 2. 组合使用暗色算法与紧凑算法
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
              }
        }
      >
        123
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

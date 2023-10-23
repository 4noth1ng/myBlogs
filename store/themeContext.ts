import { createContext } from 'react';
interface IThemeColor {
  themeColor: string;
  updateThemeColor: (e: string) => void;
}
export const ThemeContext = createContext<IThemeColor>({
  themeColor: 'light',
  updateThemeColor: () => {},
});

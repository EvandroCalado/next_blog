import { render, RenderResult } from '@testing-library/react';
import BlogThemeProvider from '../context/BlogTheme';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<BlogThemeProvider>{children}</BlogThemeProvider>);
};

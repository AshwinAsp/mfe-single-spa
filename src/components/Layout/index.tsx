import { Outlet } from 'react-router-dom';

import { ThemeProvider } from '@material-tailwind/react';

export default function Layout() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

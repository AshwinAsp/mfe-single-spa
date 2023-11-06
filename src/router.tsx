import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';

const BrowserRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          async lazy() {
            let { HomePage } = await import('./pages/Home');
            return { Component: HomePage };
          },
        },
        {
          path: 'about',
          async lazy() {
            let { AboutPage } = await import('./pages/About');
            return { Component: AboutPage };
          },
        },
        {
          path: '*',
          element: <h1>404 Not found</h1>,
        },
      ],
    },
  ],
  {
    basename: '/dimo',
  }
);

export default BrowserRouter;

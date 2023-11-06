import { RouterProvider } from 'react-router-dom';

import BrowserRouter from './router';

export default function Root(props) {
  return (
    <div><RouterProvider router={BrowserRouter} /></div>
  );
}
